import React from 'react'

export const NavButton = ({
    href,
    text,
    className = '',
    target = '_self',
    onClick,
}) => {

    const baseClass = "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md  backdrop-blur-lg py-1 text-base font-['Oxanium'] font-semibold text-white transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:shadow-md hover:shadow-slate-400/40"

    return (
        <a
            href={href}
            className={`${baseClass} ${className}`}
            target={target}
            onClick={onClick}
        >
            <span>
                {text}
            </span>
            <div
                className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
                <div className="relative h-full w-10 bg-white/30"></div>
            </div>
        </a>
    )
}