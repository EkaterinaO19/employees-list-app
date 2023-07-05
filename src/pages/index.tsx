import { Inter } from 'next/font/google'
import SearchComponent from "@/components/SearchComponent";
import UsersList from "@/components/UsersList";
import {createContext, useContext, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

interface ModalContextProps {
    sortOption: string;
    setSortOption: (sortOption: string) => void;
}
export const ModalContext = createContext<ModalContextProps>({
    sortOption: "name",
    setSortOption: () => {}
});

export default function Home() {
    const [sortOption, setSortOption] = useState<string>("name");


    return (
    <ModalContext.Provider value={{sortOption, setSortOption}}>
      <SearchComponent />
      <UsersList />
    </ModalContext.Provider>
  )
}
