import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import tree1 from '../../assets/images/tree1.png';
import tree2 from '../../assets/images/tree2.png';

// 範例資料，你可以改成自己的圖片與文字
const slides = [
  {
    img: tree1,
    title: 'We Have Small And Best O2 Plants Collection’s',
    texts: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    ]
  },
  {
    img: tree2,
    title: 'Discover Our Exotic Greenery Range',
    texts: [
      'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
      'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    ]
  },
  // ...再補兩筆
];

export default function PlantCarousel() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const prev = () => setIndex((index + total - 1) % total);
  const next = () => setIndex((index + 1) % total);
  const goTo = i => setIndex(i);

  const slide = slides[index];

  return (
    <section className="plant-carousel-section">
      <div className="plant-slide">
        <div className="plant-image">
          <img src={slide.img} alt={slide.title} />
        </div>
        <div className="plant-content">
          <h3>{slide.title}</h3>
          {slide.texts.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
          <button className="btn-explore">Explore</button>
        </div>
      </div>

      <div className="plant-controls">
        <button onClick={prev}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="count">
          {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
        </span>
        <button onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="plant-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
