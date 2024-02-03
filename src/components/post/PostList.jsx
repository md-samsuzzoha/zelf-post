/* eslint-disable react/prop-types */
import InstaIcon from "../../assets/list-insta.svg";
import TiktokIcon from "../../assets/list-tiktok.svg";
import { formatNumberToK } from "../../utils/formatNumberToK";
import { formatTimestampToMonthDay } from "../../utils/formatTimestampToMonthDay";
import "./post.css";

export default function PostList({ postData, onViewClick }) {
    const handleViewPost = (post) => {
        onViewClick(post);
    };

    return (
        <div className="w-full overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th> Date </th>
                        <th> Video </th>
                        <th> Creator </th>
                        <th> Platform </th>
                        <th> Total views </th>
                        <th> Total engagement </th>
                        <th> Engagement rate </th>
                        <th> Actions </th>
                    </tr>
                </thead>

                <tbody>
                    {postData.length === 0 ? (
                        <tr>
                            <td>Task list is empty!</td>
                        </tr>
                    ) : (
                        postData.map((post) => (
                            <tr key={post.content.id}>
                                <td>
                                    {formatTimestampToMonthDay(
                                        post.content.timestamp
                                    )}
                                </td>
                                <td>
                                    {post.content.title.length < 11
                                        ? post.content.title
                                        : post.content.title.substr(0, 11) +
                                          "..."}
                                </td>
                                <td>
                                    <div className="flex">
                                        <div className="creator-thumbnail">
                                            <img
                                                src={
                                                    post.creator
                                                        .profile_picture_url
                                                }
                                                className="user-thumbnail"
                                                width={"24px"}
                                                height={"24px"}
                                            />
                                        </div>
                                        <div>
                                            {post.creator.username.length < 14
                                                ? post.creator.username
                                                : post.creator.username.substr(
                                                      0,
                                                      14
                                                  ) + "..."}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {post.content.content_platform ==
                                        "instagram" && (
                                        <img src={InstaIcon} alt="" />
                                    )}
                                    {post.content.content_platform ==
                                        "tiktok" && (
                                        <img src={TiktokIcon} alt="" />
                                    )}
                                </td>
                                <td>{formatNumberToK(post.content.views)}</td>
                                <td>
                                    {formatNumberToK(
                                        post.content.total_engagement
                                    )}
                                </td>
                                <td>
                                    {post.content.engagement_of_views.toFixed(
                                        2
                                    )}
                                </td>
                                <td>
                                    <div className="flex items-center justify-center">
                                        <button
                                            className="brand-text"
                                            onClick={() => handleViewPost(post)}
                                        >
                                            View post
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
