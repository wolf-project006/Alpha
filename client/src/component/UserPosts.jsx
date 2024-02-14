import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import "../styles/UserPosts.css"

const UserPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // const response = await fetch('/posts_table?userId=1');
        const response = await fetch('http://localhost:8080/post_table');
        const data = await response.json();

        setPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };
    fetchUserPosts();
  }, []);

  return (
    <>
      <div className="user-posts-container">
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
