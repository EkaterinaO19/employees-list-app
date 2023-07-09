import {useQuery, UseQueryResult} from '@tanstack/react-query'

const fetchPersons = async (department: string): Promise<Person[]> => {

    try {
        const options = {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        };
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+`?__example=${department}`,
            options
        );
        const data = await response.json();
        return data.items

    } catch (err) {
        console.error(err);
        return [];
    }
}

const usePersons = (department: string): UseQueryResult<Person[]> => {

    return useQuery({
        queryKey: ['usersList', department],
        queryFn: () => fetchPersons(department)
    })
}

export {usePersons, fetchPersons}
