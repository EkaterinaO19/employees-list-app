import React from 'react';
import UserCard from "@/components/UserCard";

interface UserProfilePageProps {
    user: UserProfilePage;
}

interface UserProfilePage{
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    position: string;
    birthday: string;
    phone: string;
}

const UserProfilePage: React.FC<UserProfilePageProps> = ({user}) => {
    return (
        <>
            <div className="w-full bg-gray-100 ">
                <div className="flex flex-col items-center pb-10 pt-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"
                         alt="Bonnie image"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                </div>
            </div>
            <div className={"m-3"}>
                <div className={"flex justify-between mb-3"}>
                    <span>4 june 1996</span>
                    <span className={"text-gray-500"}>24 years</span>
                </div>
                <div>8 9999999999</div>
            </div>
        </>
    );
}

export default UserProfilePage;