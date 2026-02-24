// src/components/QuickContactFloating.jsx
import React, { useState, useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faXmark,
  faCirclePlus,
  faComment
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLine } from '@fortawesome/free-brands-svg-icons';

const DEFAULT_LINKS = {
  phone: 'tel:+886912345678',
  facebook: 'https://www.facebook.com/yourpage',
  line: 'https://line.me/R/ti/p/%40yourlineid',
};

export default function QuickContactFloating({
  links = DEFAULT_LINKS,
  initiallyOpen = true,
  persistKey = 'quickContactCollapsed',
}) {
  const [open, setOpen] = useState(initiallyOpen);

  // optional persist collapse/expand
  useEffect(() => {
    const stored = localStorage.getItem(persistKey);
    if (stored !== null) {
      setOpen(stored === 'true');
    }
  }, [persistKey]);

  useEffect(() => {
    localStorage.setItem(persistKey, open ? 'true' : 'false');
  }, [open, persistKey]);

  return (
    <div className={`quick-contact-floating ${open ? 'expanded' : 'collapsed'}`}>
      {open ? (
        <div className="button-stack">
          <OverlayTrigger placement="left" overlay={<Tooltip>聯絡電話</Tooltip>}>
            <a
              href={links.phone}
              className="circle-btn phone"
              aria-label="打電話"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="left" overlay={<Tooltip>Facebook</Tooltip>}>
            <a
              href={links.facebook}
              target="_blank"
              className="circle-btn facebook"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="left" overlay={<Tooltip>LINE</Tooltip>}>
            <a
              href={links.line}
              target="_blank"
              className="circle-btn line"
              aria-label="LINE"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLine} />
            </a>
          </OverlayTrigger>

          <button
            className="circle-btn close-btn"
            onClick={() => setOpen(false)}
            aria-label="收合聯絡列"
            title="關閉"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      ) : (
        <button
          className="reopen-btn"
          onClick={() => setOpen(true)}
          aria-label="開啟聯絡列"
          title="開啟聯絡列"
        >
          <FontAwesomeIcon icon={faComment} />
        </button>
      )}
    </div>
  );
}
