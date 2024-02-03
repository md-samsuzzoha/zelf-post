import { useEffect, useState } from "react";
import { fetchPosts } from "../utils/fetchPosts";

export function useFetchPosts() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            try {
                const json = await fetchPosts();

                if (!ignore) {
                    setComments(json);
                }
            } catch (error) {
                if (!ignore) {
                    setComments([]);
                    console.error(error);
                }
            }
        }

        startFetching();

        return () => {
            ignore = true;
        };
    }, []);

    return comments;
}
