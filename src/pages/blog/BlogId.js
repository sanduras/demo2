import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BlogId = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);


  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        setPost(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  }, [id]);
  return (
    <div className="container mx-auto w-full xl:max-w-[1260px] lg:max-w-[1024px] px-8">
      <button onClick={goBack} className="lg:inline-block hidden transition ease-in-out delay-150 text-lg font-sans font-bold tracking-wide py-3 px-8  text-blue-500 border-2 border-solid cursor-pointer bg-transparent  hover:bg-blue-500 hover:text-white rounded-full border-blue-500 mt-5" > Back </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link
            className="lg:inline-block hidden transition ease-in-out delay-150 text-lg font-sans font-bold tracking-wide py-3 px-8  text-rose-500 border-2 border-solid cursor-pointer bg-transparent  hover:bg-rose-500 hover:text-white rounded-full border-rose-500 mt-5"
            to={`/blog/${id}/edit`}
          >
            Edit this Post
          </Link>
        </>
      )}
    </div>
  );
};

export default BlogId;
