import React from 'react'

export const LoadingSpinner = () => {
    return (
        <div className="flex-col gap-4 h-dvh w-full flex items-center justify-center">
            <h1 className="text-neutral-400 text-2xl font-['Azonix']">Loading...</h1>
            <div className="w-20 h-20 border-4 border-transparent text-black text-4xl animate-spin flex items-center justify-center border-t-black rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-neutral-700 text-2xl animate-spin flex items-center justify-center border-t-neutral-400 rounded-full">
                    <div className="w-12 h-12 border-4 border-transparent text-neutral-700 text-xl animate-spin flex items-center justify-center border-t-gray-300 rounded-full">
                    </div>
                </div>
            </div>
        </div>
    )
}
