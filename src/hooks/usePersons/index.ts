import {useQuery, UseQueryResult} from '@tanstack/react-query'

interface Person {
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    userTag: string;
    department: string;
    position: string;
    birthday: string;
    phone: string;
}

const fetchPersons = async (department:string): Promise<Person[]> => {
    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`,
            options
        );
        const data = await response.json();

        return data.items;
    } catch (err) {
        console.error(err);
        return [];
    }
}

const usePersons = (department:string): UseQueryResult<Person[]> => {
    return useQuery({
        queryKey: ['usersList', department],
        queryFn: () => fetchPersons(department)
    })
}

export {usePersons, fetchPersons}
