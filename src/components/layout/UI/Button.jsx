import React from 'react'

export const Button = ({
    href,
    text,
    className = '',
    target = '_self',
    onClick,
}) => {

    const baseClass = "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-slate-600/20 backdrop-blur-lg py-1 font-['Oxanium'] font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-slate-400/40 border border-white/20"

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
