import { Inter } from 'next/font/google'
import SearchComponent from "@/components/SearchComponent";
import UsersList from "@/components/UsersList";
import {createContext, useContext, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

interface ModalContextProps {
    sortOption: string;
    setSortOption: (sortOption: string) => void;
    search: string;
    setSearch: (search: string) => void;
}
export const ModalContext = createContext<ModalContextProps>({
    sortOption: "",
    setSortOption: () => {},
    search: "",
    setSearch:() => {}
});

export default function Home() {
    const [sortOption, setSortOption] = useState<string>("name");
    const [search, setSearch] = useState<string>("")

    return (
    <ModalContext.Provider value={{sortOption, setSortOption, search, setSearch}}>
      <SearchComponent />
      <UsersList />
    </ModalContext.Provider>
  )
}
