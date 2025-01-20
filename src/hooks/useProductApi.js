import {useMutation, useQuery} from "@tanstack/react-query";

export function useFetch(url) {
    const {isPending, isError, data, error} = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        }
    });
    return {isPending, isError, data, error};
}

export function useCreate(url) {
    return useMutation({
        mutationFn: async (newData) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        }
    });
}

export function useUpdate(url) {
    return useMutation({
        mutationFn: async (updatedData) => {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        }
    });
}

export function useDelete(url) {
    return useMutation({
        mutationFn: async (id) => {
            const response = await fetch(`${url}/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        }
    });
}