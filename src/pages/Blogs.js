import React, { useEffect, useState } from 'react'
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../firebase'


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
      <div class="main-title">
        <h2>Right Hemisphere <span>Materials</span><span class="bg-text">Blogs</span></h2>
      </div>
      
      <div className='blog'>
      <div class="h-shape"></div>
        {postLists.map((post) =>{
          return ( 
           <div className='posts'> 
           
           <div className='postheader'>
             
              <div className='title'>
              <cite>{post.title}</cite>
              </div>
          </div> 
          <div className='postTextContainer'>{post.postText}</div>
          <img>{post.imageLink}</img>
          <h3>@{post.author.name}</h3>
          </div>
           
           
           )
        } )}
      </div>
    </div>
  )
}

export default Blogs