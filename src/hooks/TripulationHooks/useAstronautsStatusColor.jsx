import React from 'react'

export const useAstronautsStatusColor = () => {
    const getAstronautsStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'retired':
                return 'bg-red-500/20 text-red-400 border border-red-500/30';
            case 'deceased':
                return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
            case 'in-training':
                return 'bg-blue-500/20 text-blue-400 border border-blue-500/30';
            case 'occasional spaceflight':
                return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30';
            default:
                return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
    };

    return { getAstronautsStatusColor };
}
