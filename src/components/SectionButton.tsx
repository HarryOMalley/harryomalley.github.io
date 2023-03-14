import React, { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

export enum Arrow {
    up,
    down,
}

type SectionButtonProps = {
    direction: Arrow;
    to: string;
};

function SectionButton({ direction, to }: SectionButtonProps) {
    const [hidden, setHidden] = useState<boolean>(false);

    const handleClick = () => {
        setHidden(true);
        setTimeout(() => {
            setHidden(false);
        }, 2000);
    };

    return (
        <div className="m-3 h-5 items-center text-center">
            <a href={to} onClick={() => {}} hidden={hidden}>
                {direction == Arrow.up ? (
                    <FaArrowUp onClick={handleClick} />
                ) : (
                    <FaArrowDown onClick={handleClick} />
                )}
            </a>
        </div>
    );
}

export default SectionButton;
