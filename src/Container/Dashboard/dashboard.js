import { Button } from '@mui/material'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { auth, db } from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Dashboard() {

    const router = useNavigate();
    useEffect(() => {
        const authentication = onAuthStateChanged(auth,(user) => {
            if (user) {
               
            } else {
                router('/login')
           }
        }) 
        
        return authentication
    },[])

    const handleChange = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        console.log("signout");
        }).catch((error) => {
        // An error happened.
        });
    }

    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [imageLink, setImageLink] = useState('')
    const postsCollectionRef = collection(db, 'posts')
    const createPost = async () => {

      await addDoc(postsCollectionRef, {title, postText, imageLink, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid }})
      router('/Blogs')
    }

    return (
      <>
        
        <Button sx={{
            marginTop: 8,
            marginLeft:10,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }} onClick={handleChange}>Logout</Button>

          <div className='form'>
            <div className='cpContainer'>
              <h1>Create a post</h1>
              <div className='inputGp'>
                <label> Title: </label>
                <input placeholder='Title..' onChange={(event)=> {setTitle(event.target.value)}} />
              </div>

              <div className='inputGp'>
              <label> Image Link: </label>
              <textarea placeholder='https://.....' onChange={(event)=> {setImageLink(event.target.value)}} />
              </div>
                
              <div className='inputGp'>
              <label> Post: </label>
              <textarea placeholder='Post...' onChange={(event)=> {setPostText(event.target.value)}} />
              </div>
              <button onClick={createPost}>Submit Post</button>
            </div>
          </div>
      </>
  )
}
