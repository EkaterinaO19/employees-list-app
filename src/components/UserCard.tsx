import React from 'react';

const UserCard: React.FC<UserCardProps> = ({user}) => {
    return (
        <>
            <div className="p-3">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-3 sm:py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div
                                    className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {user.firstName} {user.lastName} <span
                                    className={"text-gray-500"}>{user.userTag}</span>
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {user.position}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default UserCard;