export const fetchPosts = async () => {
    const result = await fetch(
        `https://hackapi.hellozelf.com/frontend/api/v1/contents?page=1`
    );

    return result.json();
};
