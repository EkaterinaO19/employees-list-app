import SearchComponent from "@/components/SearchComponent";
import UsersList from "@/components/UsersList";
import {createContext, useState} from "react";
import ErrorBoundary from "@/components/ErrorBoundary";

export const ModalContext = createContext<ModalContextProps>({
    sortOption: "",
    setSortOption: () => {
    },
    search: "",
    setSearch: () => {
    }
});


export default function Home() {
    const [sortOption, setSortOption] = useState<string>("name");
    const [search, setSearch] = useState<string>("")


    return (
        <ErrorBoundary>
            <ModalContext.Provider value={{sortOption, setSortOption, search, setSearch}}>
                <SearchComponent/>
                <UsersList/>
            </ModalContext.Provider>
        </ErrorBoundary>
    )
}
