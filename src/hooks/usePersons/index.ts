import {useQuery, UseQueryResult} from '@tanstack/react-query'

interface Person {
    id: number;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: string;
    position: string;
    birthday: string;
    phone: string;
}

const fetchPersons = async (): Promise<Person[]> => {
    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch("https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all",
            options
        );
        const data = await response.json();
        console.log(data);

        return data.items;
    } catch (err) {
        console.error(err);
        return [];
    }
}

const usePersons = ():UseQueryResult<Person[]> => {
    return useQuery('usersList', fetchPersons);
}

export {usePersons, fetchPersons}
