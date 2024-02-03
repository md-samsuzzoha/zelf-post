import { useState } from "react";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { formatNumberToK } from "../../utils/formatNumberToK";
import { formatTimestampToMonthDay } from "../../utils/formatTimestampToMonthDay";
import PostCardList from "./PostCardList";
import PostList from "./PostList";
import ViewPostModal from "./ViewPostModal";
import classes from "./modal.module.css";

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

    console.log(postData);
    console.log(postData.content);

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
                >
                    <div className={classes.showPostRoot}>
                        <div style={{ backgroundColor: "#000" }}>
                            <div className={classes.postImg}>
                                <img
                                    src={postToView?.content?.thumbnail_url}
                                    height={300}
                                />
                            </div>
                        </div>
                        <div className={classes.postContent}>
                            <div className={classes.postHeading}>
                                <img
                                    src={
                                        postToView?.creator?.profile_picture_url
                                    }
                                    width={24}
                                    height={24}
                                    style={{ borderRadius: "12px" }}
                                />
                                <h4 style={{ margin: "0px" }}>
                                    {postToView?.creator?.name}
                                </h4>
                                <p style={{ margin: "0px", color: "#666" }}>
                                    {formatTimestampToMonthDay(
                                        postToView?.content?.timestamp
                                    )}
                                </p>
                                <a href="#" onClick={() => setShowModal(false)}>
                                    &#10006;
                                </a>
                            </div>
                            <div
                                style={{
                                    marginTop: "12px",
                                    color: "#222",
                                    textAlign: "left",
                                }}
                            >
                                <p>{postToView?.content?.text}</p>
                                <a href={postToView?.content?.external_url}>
                                    See original post
                                </a>
                            </div>
                            <div className={classes.postStats}>
                                <div>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "#222",
                                        }}
                                    >
                                        {formatNumberToK(
                                            postToView?.content?.views
                                        )}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#666",
                                        }}
                                    >
                                        Total views
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "#222",
                                        }}
                                    >
                                        {formatNumberToK(
                                            postToView?.content?.likes
                                        )}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#666",
                                        }}
                                    >
                                        Total Likes
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "#222",
                                        }}
                                    >
                                        {postToView?.content?.comments}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#666",
                                        }}
                                    >
                                        Total comments
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            fontSize: "16px",
                                            color: "#222",
                                        }}
                                    >
                                        {postToView?.content?.engagement_of_views?.toFixed(
                                            2
                                        ) + "%"}
                                    </p>
                                    <p
                                        style={{
                                            fontWeight: 500,
                                            color: "#666",
                                        }}
                                    >
                                        Engagement Rate
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ViewPostModal>
            )}
            <div className="pb-40">
                <PostList postData={postData} onViewClick={handleViewClick} />
            </div>
            <PostCardList postData={postData} totalContents={totalContents} />
        </div>
    );
}
