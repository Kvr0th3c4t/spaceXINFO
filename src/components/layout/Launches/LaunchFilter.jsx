import { useState } from "react"
import { Button } from "../UI/Button";

export const LaunchFilter = ({ statusOptions, launcherOptions, orbitOptions, padOptions, onApplyFilter }) => {

    const [selectedStatus, setSelectedStatus] = useState("");
    const [selectedLauncher, setSelectedLauncher] = useState("");
    const [selectedOrbit, setSelectedOrbit] = useState("");
    const [selectedPad, setSelectedPad] = useState("");

    const applyFilter = () => {
        onApplyFilter({
            status: selectedStatus,
            launcher: selectedLauncher,
            orbit: selectedOrbit,
            pad: selectedPad
        });
    }

    return (
        <section className="mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 2xl:mb-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg border border-white/10 overflow-hidden">

                {/* Filtros Section */}
                <div className="flex flex-col sm:flex-col md:flex-row border-b border-white/10">

                    {/* Estado Filter */}
                    <div className="flex-1 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4 
                                    border-b sm:border-b md:border-b-0 md:border-r border-white/10">
                        <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       font-semibold text-slate-300 
                                       mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-2">
                            ESTADO
                        </h3>
                        <select
                            name="statusOptions"
                            id="statusOptions"
                            value={selectedStatus}
                            onChange={(event) => setSelectedStatus(event.target.value)}
                            className="w-full bg-slate-600/20 backdrop-blur-lg 
                                    py-1 px-2 sm:py-1.5 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-2.5 2xl:px-3
                                    rounded-md font-['Oxanium'] font-semibold text-white border border-white/20
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                        >
                            <option value="" className="bg-white text-neutral-900 font-semibold">Todos</option>
                            {statusOptions.map(option =>
                                <option key={option.description} value={option.id} className="bg-white text-neutral-900 font-semibold">
                                    {option.name}
                                </option>
                            )}
                        </select>
                    </div>

                    {/* Lanzador Filter */}
                    <div className="flex-1 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4 
                                    border-b sm:border-b md:border-b-0 md:border-r border-white/10">
                        <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       font-semibold text-slate-300 
                                       mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-2">
                            LANZADOR
                        </h3>
                        <select
                            name="launcherOptions"
                            id="launcherOptions"
                            value={selectedLauncher}
                            onChange={(event) => setSelectedLauncher(event.target.value)}
                            className="w-full bg-slate-600/20 backdrop-blur-lg 
                                       py-1 px-2 sm:py-1.5 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-2.5 2xl:px-3
                                       rounded-md font-['Oxanium'] font-semibold text-white border border-white/20
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                        >
                            <option value="" className="bg-white text-neutral-900 font-semibold">Todos</option>
                            {launcherOptions.map(option =>
                                <option key={option.id} value={option.id} className="bg-white text-neutral-900 font-semibold">
                                    {option.name}
                                </option>
                            )}
                        </select>
                    </div>

                    {/* Órbita Filter */}
                    <div className="flex-1 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4 
                                    border-b sm:border-b md:border-b-0 md:border-r border-white/10">
                        <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       font-semibold text-slate-300 
                                       mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-2">
                            ÓRBITA
                        </h3>
                        <select
                            name="orbitOptions"
                            id="orbitOptions"
                            value={selectedOrbit}
                            onChange={(event) => setSelectedOrbit(event.target.value)}
                            className="w-full bg-slate-600/20 backdrop-blur-lg 
                                       py-1 px-2 sm:py-1.5 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-2.5 2xl:px-3
                                       rounded-md font-['Oxanium'] font-semibold text-white border border-white/20
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                        >
                            <option value="" className="bg-white text-neutral-900 font-semibold">Todos</option>
                            {orbitOptions.map(option =>
                                <option key={option.id} value={option.name} className="bg-white text-neutral-900 font-semibold">
                                    {option.name}
                                </option>
                            )}
                        </select>
                    </div>

                    {/* Plataforma Filter */}
                    <div className="flex-1 p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4">
                        <h3 className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       font-semibold text-slate-300 
                                       mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-2">
                            PLATAFORMA
                        </h3>
                        <select
                            name="padOptions"
                            id="padOptions"
                            value={selectedPad}
                            onChange={(event) => setSelectedPad(event.target.value)}
                            className="w-full bg-slate-600/20 backdrop-blur-lg 
                                       py-1 px-2 sm:py-1.5 sm:px-2 md:py-1.5 md:px-2.5 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-2.5 2xl:px-3
                                       rounded-md font-['Oxanium'] font-semibold text-white border border-white/20
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base"
                        >
                            <option value="" className="bg-white text-neutral-900 font-semibold">Todos</option>
                            {padOptions.map(option =>
                                <option key={option.id} value={option.id} className="bg-white text-neutral-900 font-semibold">
                                    {option.name}
                                </option>
                            )}
                        </select>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="p-2 sm:p-2 md:p-3 lg:p-3 xl:p-3 2xl:p-4 
                               flex flex-col gap-2 sm:gap-2 md:gap-0 md:flex-row md:justify-between md:items-center">

                    {/* Filtros Counter */}
                    <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                     text-slate-400 text-center md:text-left order-2 md:order-1">
                        Filtros aplicados: {[selectedStatus, selectedLauncher, selectedOrbit, selectedPad].filter(Boolean).length}
                    </span>

                    {/* Buttons */}
                    <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2 md:flex-row order-1 md:order-2">
                        <Button
                            onClick={() => {
                                setSelectedStatus('');
                                setSelectedLauncher('');
                                setSelectedOrbit('');
                                setSelectedPad('');
                            }}
                            text="Limpiar"
                            className="px-2 sm:px-3 md:px-3 lg:px-4 xl:px-4 2xl:px-5 
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       w-full md:w-auto"
                        />
                        <Button
                            onClick={applyFilter}
                            text="Aplicar filtros"
                            className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 
                                       text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base 
                                       w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}