import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalApi from '../Services/GlobalApi';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Detalhes.css';

function BlogDetail() {
    const {id}=useParams();
    const [post,setPost]=useState([])
    useEffect(()=>{
        console.log("Id",id)
        getBlogById();
    },[])

    const getBlogById=()=>{
        GlobalApi.getPostById(id).then(resp=>{
           
            const item=resp.data.data;
            const result={
                id:item.id,
                title:item.attributes.title,
                desc:item.attributes.description,
                tag:item.attributes.tag,
                coverImage:item.attributes.coverImage.data.attributes.url,
            };
            setPost(result);
            console.log("Result",result);
        })
    }
  return (
    <div className='blog-detail'>
      <h3 className='tag'>{post.tag}</h3>
      <h3 className='title'>{post.title}</h3>
      <div className='author-info'>
        <img src="https://courses.tubeguruji.com/static/media/logo.8f2db318fe31ffaf5793.png" className='author-avatar' />
        <div className='author-details'>
          <h3 className='author-name'>Tubeguruji</h3>
          <h3 className='post-date'>24 Sept 2024</h3>
        </div>
      </div>
      <img src={post.coverImage} className='cover-image' />
      <ReactMarkdown children={post.desc} escapeHtml={false} className='markdown-content' />
    </div>
  )
}

export default BlogDetail