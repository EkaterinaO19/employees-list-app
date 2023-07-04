import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {ParsedUrlQuery} from "querystring";

interface PersonInfo{
    id: string;
    avatarUrl: string;
    firstName: string;
    lastName: string;
    position: string;
    birthday: string;
    phone: string;
}


const fetchPerson = async (id:string): Promise<PersonInfo[] | undefined> => {
    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?${id}`,
            options
        );
        const data = await response.json();

        return data.items;
    } catch (err) {
        console.error(err);
        return [];
    }
}

const usePerson = (id: string): UseQueryResult<PersonInfo[] | undefined> => {
    return useQuery(["userInfo", { id }], () => fetchPerson(id));
}

export {usePerson, fetchPerson}
