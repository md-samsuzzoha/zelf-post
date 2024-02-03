import { useState } from "react";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import PostCardList from "./PostCardList";
import PostList from "./PostList";
import ViewPostModal from "./ViewPostModal";

export default function PostBoard() {
    const [showModal, setShowModal] = useState(false);
    const [postToView, setPostToView] = useState(null);

    let postData = [];
    let totalContents = 0;
    const posts = useFetchPosts();
    if (posts && posts.data) {
        postData = posts.data;
        totalContents = posts.total_contents;
    } else {
        postData = [];
        totalContents = 0;
    }

    const handleViewClick = (post) => {
        setPostToView(post);
        setShowModal(true);
    };

    return (
        <div>
            {showModal && (
                <ViewPostModal
                    postToView={postToView}
                    onCloseModal={() => setShowModal(false)}
                />
            )}
            <div className="pb-40">
                <PostList postData={postData} onViewClick={handleViewClick} />
            </div>
            <PostCardList postData={postData} totalContents={totalContents} />
        </div>
    );
}
