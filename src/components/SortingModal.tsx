import React from 'react';
interface SortingModalProps {
    isOpen: () => void;
    onClose: () => void;
}
const SortingModal:React.FC<SortingModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
            <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg z-100">
                <div className="flex justify-end">
                    <button
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
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
                </div>
                <div className="mt-4">
                    <h2 className="text-2xl font-bold">Modal Title</h2>
                    <p className="mt-2">Modal content goes here</p>
                </div>
            </div>
        </div>
    );
}

export default SortingModal;