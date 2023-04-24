import posts from "./curated-content";

import PostPreview from "../components/PostPreview";

const CuratedContent = () => {
    return (
        <>
            <h3>Curated content</h3>
            {
                posts.map(post => (
                    <PostPreview key={post.title} title={post.title} content={post.content} link={`/posts/${post.title}`} author={post.author} />
                ))
            }
        </>
    )
}

export default CuratedContent;