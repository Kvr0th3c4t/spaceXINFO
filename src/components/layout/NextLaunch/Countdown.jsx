import { useState, useEffect } from 'react';
import { LoadingSpinner } from '../UI/LoadingSpinner';

export const Countdown = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        if (targetDate) {
            calculateTimeLeft();
            const timer = setInterval(calculateTimeLeft, 1000);
            return () => clearInterval(timer);
        }
    }, [targetDate]);

    if (!targetDate) return (
        <LoadingSpinner></LoadingSpinner>
    )

    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 
                       max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-3xl 2xl:max-w-3xl 
                       mx-auto
                       mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-5 2xl:mb-5 
                       font-['Oxanium']
                       gap-1 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0 2xl:gap-0">

            {[
                { value: timeLeft.days, label: 'DÍAS' },
                { value: timeLeft.hours, label: 'HORAS' },
                { value: timeLeft.minutes, label: 'MINUTOS' },
                { value: timeLeft.seconds, label: 'SEGUNDOS' }
            ].map((item, index) => (
                <div key={index}
                    className="relative bg-gradient-to-br from-black/90 via-gray-900/80 to-black/70 
                             p-1 sm:p-1 md:p-1 lg:p-1 xl:p-1 2xl:p-1 
                             text-center border-2 border-gray-600 shadow-xl shadow-black/60 
                             transition-all duration-300 backdrop-blur-md"
                    style={{
                        clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 6px 14px rgba(0,0,0,0.4)'
                    }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent opacity-70"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-gray-600/30"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-700/20 to-black/20"></div>
                    <div className="relative z-10">
                        <div className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 
                                      font-bold text-white 
                                      mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 
                                      tracking-wider"
                            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,255,255,0.1)' }}>
                            {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-xs 
                                      text-gray-200 uppercase tracking-widest font-medium">
                            {item.label}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};