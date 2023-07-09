import React, {useContext} from 'react';
import {ModalContext} from '@/pages';

interface SortingModalProps {
    onClose: () => void;
}

const SortingModal: React.FC<SortingModalProps> = ({onClose}) => {
    const {setSortOption, sortOption} = useContext(ModalContext);

    const handleSortOptionChange = (option: string) => {
        setSortOption(option);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
                <button
                    className="absolute top-0 right-0 m-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={onClose}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-3">Sorting</h2>
                    <div>
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                value="name"
                                name="sortingOption"
                                id="name"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={sortOption === 'name'}
                                onChange={() => handleSortOptionChange('name')}
                            />
                            <label
                                htmlFor="name"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                By alphabet
                            </label>
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="radio"
                                value="birth"
                                name="sortingOption"
                                id="birth"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                                checked={sortOption === 'birth'}
                                onChange={() => handleSortOptionChange('birth')}
                            />
                            <label
                                htmlFor="birth"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                                By birth
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortingModal;
