/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ViewPostModal({ postToView, onCloseModal }) {
    const post = postToView;
    return (
        <>
            <div className="view-modal"></div>
            <div className="modal-content">
                <div className="flex place-content-between login-container">
                    <div className="banner">
                        <img
                            src={post.content.thumbnail_url}
                            alt="login banner"
                        />
                    </div>
                    <div className="login-actions">
                        <div className="title creator-name">
                            {post.creator.name}
                        </div>

                        <button
                            className="brand-bg w-250"
                            onClick={() => onCloseModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
