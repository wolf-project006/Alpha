import { Link } from 'react-router-dom';

const PostCard = ({ title, body, id }) => {
  return (
    <>
      <div className="postCard">
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/post/${id}`}>Read More</Link>
      </div>
    </>
  );
};
export default PostCard;
