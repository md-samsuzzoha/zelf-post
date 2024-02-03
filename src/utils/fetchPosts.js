export const fetchPosts = async () => {
    const result = await fetch(
        // `https://3ac9-202-84-41-237.ngrok-free.app/api/stories/`,
        `https://hackapi.hellozelf.com/frontend/api/v1/contents?page=1`,
        {
            // method: "GET",
            // headers: {
            //     "ngrok-skip-browser-warning": true,
            // },
        }
    );

    return result.json();
};
