import React from 'react';
import { Button } from '../UI/Button';
import { LaunchFilter } from './LaunchFilter';

export const LaunchFilterToggle = ({
    showFilters,
    toggleFilterMenu,
    statusData,
    launcherData,
    orbitData,
    padData,
    handleApplyFilter
}) => {
    return (
        <>
            <Button
                onClick={showFilters}
                text={"Ver filtros"}
                type="button"
                className={"px-16 uppercase mb-5"}
            />

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${toggleFilterMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className={`transition-transform duration-500 ease-in-out ${toggleFilterMenu ? 'translate-y-0' : '-translate-y-full'}`}>
                    <LaunchFilter
                        statusOptions={statusData}
                        launcherOptions={launcherData}
                        orbitOptions={orbitData}
                        padOptions={padData}
                        onApplyFilter={handleApplyFilter}
                    />
                </div>
            </div>
        </>
    );
};