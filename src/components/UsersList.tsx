import {useContext, useEffect, useState} from "react";
import {Person, usePersons} from "@/hooks";
import UserCard from "@/components/UserCard";
import Link from 'next/link'
import LoaderComponent from "@/components/LoaderComponent";
import {ModalContext} from "@/pages";




export default function UsersList() {
    const [selectedTab, setSelectedTab] = useState("1");
    const [queryParameter, setQueryParameter] = useState("all")

    const {data, isLoading, isError} = usePersons(queryParameter)
    const [filtered, setFiltered] = useState<Person[]>([]);
    const {sortOption} = useContext(ModalContext)
    useEffect(() => {
        if (data) {
            switch (sortOption) {
                case "birth":
                    setFiltered(data.sort((a: Person, b: Person) => {
                        const dateA = new Date(a.birthday);
                        const dateB = new Date(b.birthday);
                        return dateA.getTime() - dateB.getTime();
                    }))

                    break;
                default:
                case "name":
                    setFiltered(data.sort((a: Person, b: Person) => {
                        let fa = a.firstName.toLowerCase(),
                            fb = b.firstName.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    }))
                    console.log("Sorting2")
                    console.log(sortOption)
                    break;
            }
        }
    }, [sortOption, data])

    const items = [
        {
            key: '1',
            label: `All`,
            query: `all`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '2',
            label: `Designers`,
            query: `design`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Analytics`,
            query: `analytics`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Managers`,
            query: `management`,
            children: `Content of Tab Pane 1`,
        },
        {
            key: '5',
            label: `iOS`,
            query: `ios`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '6',
            label: `Android`,
            query: `android`,
            children: `Content of Tab Pane 3`,
        },
    ];

    if (isLoading) {
        return <LoaderComponent/>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    if (!data) {
        return <div>Data not found!</div>;
    }


    function handleTabClick(key: string, query: string) {
        setSelectedTab(key);
        setQueryParameter(query);
    }

    return (
        <>
            <div
                className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    {items.map((item) => (
                        <li key={item.key} className="mr-2">
                            <button
                                className={`inline-block p-4 ${
                                    selectedTab === item.key
                                        ? "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                                        : "text-gray-600 dark:text-gray-400"
                                }`}
                                onClick={() => handleTabClick(item.key, item.query)}
                            >
                                {item.label}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>{filtered.map(user => (
                <Link key={user.id} href={`/user/${user.id}`}>
                    <UserCard key={user.id} user={user}/>
                </Link>
            ))}
            </div>
        </>
    )
};

