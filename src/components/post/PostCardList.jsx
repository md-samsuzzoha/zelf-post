/* eslint-disable react/prop-types */
import PostCard from "./PostCard";
import "./post.css";

export default function PostCardList({ postData, totalContents }) {
    return (
        <div className="w-full">
            <div className="flex place-content-between">
                <div className="flex card-title item-center">
                    All posts <span>({totalContents} total posts)</span>
                </div>
                <button className="view-all-btn brand-text">VIEW ALL</button>
            </div>
            {postData.length === 0 ? (
                <p>Task list is empty!</p>
            ) : (
                <div className="post-card-container">
                    {postData.map((post) => (
                        <PostCard key={post.content.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
}
