/* eslint-disable react/prop-types */
import InstaIcon from "../../assets/card-insta-icon.svg";
import TiktokIcon from "../../assets/card-tiktok-icon.svg";
import EyeIcon from "../../assets/eye.svg";
import MessageIcon from "../../assets/message.svg";
import LikeIcon from "../../assets/thumb.svg";
import { formatNumberToK } from "../../utils/formatNumberToK";
import "./post.css";

export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="thumbnail">
                <img
                    src={post.content.thumbnail_url}
                    width={"226px"}
                    height={"273px"}
                    alt=""
                />
                <div className="flex card-user">
                    <div className="flex user-thumb">
                        <img
                            src={post.creator.profile_picture_url}
                            width={"24px"}
                            height={"24px"}
                            alt=""
                        />
                        <div>
                            {post.creator.name.length < 18
                                ? post.creator.name
                                : post.creator.name.substr(0, 18) + "..."}
                        </div>
                    </div>
                    <div>
                        {post.content.content_platform == "instagram" && (
                            <img src={InstaIcon} alt="" />
                        )}
                        {post.content.content_platform == "tiktok" && (
                            <img src={TiktokIcon} alt="" />
                        )}
                    </div>
                </div>
            </div>
            <div className="reactions">
                <ul className="flex">
                    <li className="flex item-center">
                        <img src={EyeIcon} alt="" />
                        {formatNumberToK(post.content.views)}
                    </li>
                    <li className="flex item-center">
                        <img src={LikeIcon} alt="" />
                        {post.content.likes}
                    </li>
                    <li className="flex item-center">
                        <img src={MessageIcon} alt="" />
                        {post.content.comments}
                    </li>
                </ul>
            </div>
        </div>
    );
}
