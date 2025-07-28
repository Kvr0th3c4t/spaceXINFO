export const useStatusColors = () => {
    const getStatusColor = (status) => {
        if (!status) return 'bg-gray-900 text-gray-300';

        switch (status.toLowerCase()) {
            case 'success':
                return 'bg-green-900 text-green-300';
            case 'failure':
                return 'bg-red-900 text-red-300';
            case 'partial failure':
                return 'bg-orange-900 text-orange-300';
            case 'to be confirmed':
            case 'tbc':
                return 'bg-yellow-900 text-yellow-300';
            case 'go':
                return 'bg-blue-900 text-blue-300';
            default:
                return 'bg-gray-900 text-gray-300';
        }
    };

    return { getStatusColor };
};