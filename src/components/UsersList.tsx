import { useContext, useEffect, useState } from "react";
import { Person, usePersons } from "@/hooks";
import UserCard from "@/components/UserCard";
import Link from 'next/link';
import LoaderComponent from "@/components/LoaderComponent";
import { ModalContext } from "@/pages";

export default function UsersList() {
    const [selectedTab, setSelectedTab] = useState("1");
    const [queryParameter, setQueryParameter] = useState("all");

    const { data, isLoading, isError } = usePersons(queryParameter);
    const [filtered, setFiltered] = useState<Person[]>([]);
    const [searchQuery, setSearchQuery] = useState<Person[]>([])
    const { sortOption , setSearch} = useContext(ModalContext);

    useEffect(() => {
        if (data) {
            let sortedData: Person[] = [...data];

            switch (sortOption) {
                case "birth":
                    sortedData.sort((a: Person, b: Person) => {
                        const dateA = new Date(a.birthday);
                        const dateB = new Date(b.birthday);
                        return dateA.getTime() - dateB.getTime();
                    });
                    break;
                case "name":
                default:
                    sortedData.sort((a: Person, b: Person) => {
                        const fa = a.firstName.toLowerCase();
                        const fb = b.firstName.toLowerCase();

                        if (fa < fb) {
                            return -1;
                        }
                        if (fa > fb) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
            }

            setFiltered(sortedData);
        }
    }, [sortOption, data]);

    const items = [
        {
            key: '1',
            label: `Все`,
            query: `all`,
            children: `Содержимое панели 1`,
        },
        // Остальные элементы
    ];

    if (isLoading) {
        return <LoaderComponent />;
    }

    if (isError) {
        return <div>Что-то пошло не так!</div>;
    }

    if (!data) {
        return <div>Данные не найдены!</div>;
    }

    function handleTabClick(key: string, query: string) {
        setSelectedTab(key);
        setQueryParameter(query);
    }

    return (
        <>
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
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
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {filtered.map(user => (
                    <Link key={user.id} href={`/user/${user.id}`}>
                        <UserCard user={user} />
                    </Link>
                ))}
            </div>
        </>
    );
}
