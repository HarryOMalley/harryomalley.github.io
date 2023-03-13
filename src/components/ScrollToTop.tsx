import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function ScrollToTop() {
    const [visible, setVisible] = useState<boolean>(false);
    const toggleVisible = (e: any) => {
        const scrolled = document.documentElement.scrollHeight;
        // console.log('Window has scrolled');
        // console.log(document.documentElement);
        console.log(document.documentElement.scrollHeight);
        // console.log(window.scrollY);
        // console.log(window.screenX);
        // console.log(window.screenY);
        // console.log(window.scrollY);
        // console.log(window.scrollX);
        // console.log(scrolled);
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        console.log('Adding event listener');
        window.addEventListener('scroll', toggleVisible, true);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    });

    return (
        <>
            {visible ?? (
                <div className="fixed left-1/2 bottom-3">
                    <FaArrowCircleUp onClick={goToTop} />
                </div>
            )}
        </>
    );
}

export default ScrollToTop;
