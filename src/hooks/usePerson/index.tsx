import {useQuery, UseQueryResult} from '@tanstack/react-query'
import {ParsedUrlQuery} from "querystring";


const fetchPerson = async (id:string): Promise<PersonInfo[] | undefined> => {
    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+`?${id}`,
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
