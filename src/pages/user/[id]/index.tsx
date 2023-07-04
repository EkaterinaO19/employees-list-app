import React from 'react';
import {usePerson} from "@/hooks";
import {useRouter} from "next/router";
import {calculateAge, formatAge, formatDate, formatPhoneNumber} from "@/utils/helpers";
import LoaderComponent from "@/components/LoaderComponent";

const UserProfilePage = () => {
    const router = useRouter();
    const id = router.query.id;

    const {data, isLoading, isError} = usePerson(id as string);


    if (isLoading) {
        return <LoaderComponent/>;
    }

    if (isError) {
        return <div>Something went wrong!</div>;
    }

    if (!data) {
        return <div>Data not found!</div>;
    }

    const handlePhoneClick = (phoneNumber:string) => {
        window.open(`tel:${phoneNumber}`, "_blank");
    };


    return (
        <>
            {data?.map(user =>
                <div key={user.id}>
                    <div className="w-full bg-gray-100 ">
                        <button onClick={() => router.push('/')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-center pb-10 pt-10">
                            <div
                                className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                </svg>
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.firstName} {user.lastName}</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{user.position}</span>
                        </div>
                    </div>
                    <div className={"m-3"}>
                        <div className={"flex justify-between mb-3"}>
                            <span>{formatDate(user.birthday)}</span>
                            <span className={"text-gray-500"}>{formatAge(calculateAge(user.birthday))}</span>
                        </div>
                        <div className={"cursor-pointer"}>
                            <button
                                className="phone-link"
                                onClick={() => handlePhoneClick(user.phone)}
                            >
                                {formatPhoneNumber(user.phone)}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserProfilePage;