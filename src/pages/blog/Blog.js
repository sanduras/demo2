import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data)
                console.log(response.data);
            } catch (error) {
                
            }
        }
        getPosts()
    }, [])
  return (
    <div className='container mx-auto w-full xl:max-w-[1260px] lg:max-w-[1024px] px-8'>

        Blog page
      {
        posts.map((post) => {
            return (
         
          
            <Link key={post.id} to={`/blog/${post.id}`}>
                <li className='text-slate-700'>{post.title}</li>
            </Link>

        
            );
        })
      }
    </div>
  )
}

export default Blog
