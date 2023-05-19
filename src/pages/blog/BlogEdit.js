import React from 'react'
import { useParams } from 'react-router-dom'

const BlogEdit = () => {
    const {id} = useParams();
  return (
    <div>
      Edit {id}
    </div>
  )
}

export default BlogEdit
