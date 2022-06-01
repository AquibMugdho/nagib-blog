import React, { useEffect, useState } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../firebase'
import '../App.css';

function Blogs() {
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')
  useEffect(()=>{
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getPosts()
  }, [])
  return (

    
    <div className='blogs'>
      <div className="main-title">
        <h2>Right Hemisphere <span>Materials</span><span className="bg-text">Blogs</span></h2>
      </div>
      
      
      <div className="h-shape"></div>
      <div className="blogContainer">
        {postLists.map((post) =>{
          return ( 
           <div className='posts'> 
           
           <div className='postheader'>
             
              <div className='title'>
              <cite>{post.title}</cite>
              </div>
          </div> 
          <div className='postTextContainer'>{post.postText}</div>
          <img src={post.imageLink} />
          <h3>@{post.author.name}</h3>
          
          </div>
           
           
           )
        } )}
      </div>
    </div>
  )
}

export default Blogs