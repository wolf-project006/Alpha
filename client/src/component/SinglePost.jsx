const SinglePost = ({ title, body, username, createAt, imageUrl }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {imageUrl && <img src={imageUrl} alt="Post" />}
        <p>
          <strong>Posted by:</strong>
          {username}
        </p>
        <p>
          <strong>Created on:</strong>
          {createAt}
        </p>
        <p>{body}</p>
      </div>
    </>
  );
};

export default SinglePost;
