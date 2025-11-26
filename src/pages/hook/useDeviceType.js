import { useEffect, useState } from 'react'

export default function useDeviceType() {
    const [deviceStatus, setDeviceStatus] = useState("Desktop");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newStatus = "pc";
            if (width < 768) {
                newStatus = "mobile";
            } else if (width >= 768 && width <= 1300) {
                newStatus = "iPad";
            }

            if (newStatus !== deviceStatus) {
                setDeviceStatus(newStatus);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // 初始化

        return () => window.removeEventListener('resize', handleResize);
    }, [deviceStatus]);

    return deviceStatus;
}