import { Inter } from 'next/font/google'
import SearchComponent from "@/components/SearchComponent";
import UsersList from "@/components/UsersList";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SearchComponent />
      <UsersList/>
    </>
  )
}
