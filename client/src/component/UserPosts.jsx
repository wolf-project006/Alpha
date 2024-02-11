import { useEffect, useState } from 'react';
import PostCard from './PostCard';

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch('/posts');
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };
    fetchUserPosts();
  }, []);

  return (
    <>
      <div>
        <h2>My Posts</h2>
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.id} title={post.title} body={post.body} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserPosts;
