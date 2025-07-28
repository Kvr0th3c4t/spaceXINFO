import React from 'react'
import { Button } from '../UI/Button'

export const LaunchAgenciesCard = ({ agency }) => {
    return (
        <div
            key={agency.id}
            className="bg-neutral-800/40 backdrop-blur-sm rounded-2xl p-6 border border-neutral-700/40 hover:border-neutral-600/60 transition-all duration-300"
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-neutral-100">{agency.name}</h3>
                    <span className="px-3 py-1 bg-neutral-700/50 rounded-full text-xs text-neutral-300 font-medium">
                        {agency.abbrev}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-2 group-hover:from-cyan-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">Tipo</p>
                        <p className="text-neutral-300 text-sm">{agency.type}</p>
                    </div>
                    <div className="group">
                        <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent mb-2 group-hover:from-yellow-400 transition-colors"></div>
                        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-1">País</p>
                        <p className="text-neutral-300 text-sm">{agency.country_code}</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="h-px bg-gradient-to-r from-neutral-500 via-neutral-700 to-transparent"></div>
                    <Button text={"Saber más"} href={`${agency.wiki_url}`} target='_blank' className={"px-4 uppercase"}>
                    </Button>
                </div>
            </div>
        </div>
    )
}
