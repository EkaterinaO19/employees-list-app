import {useState} from "react";
import SortingModal from "../components/SortingModal";

export default function SearchComponent() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleButtonClick = (event: any) => {
        event.preventDefault();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    return (
        <>
            <div className={"p-3"}>
                <h1 className={"font-bold text-3xl mb-2"}>Search</h1>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap={"round"} strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 focus:outline-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Search name, tag, email..."
                    />
                    <button
                        className={"absolute right-2.5 bottom-2.5 focus:outline-none px-4 py-2 cursor-pointer"}
                        onClick={handleButtonClick}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"/>
                        </svg>
                    </button>
                </div>
            </div>
           <SortingModal isOpen={modalOpen} onClose={closeModal}/>
        </>
    )
}