import React, { useEffect, useState } from 'react'
import Post from './Post'
import db from './Firebase'

const Instagram = () => {
  const [posts, setPosts] = useState([])

  //useEffect
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
    })
  }, [])
  return (
    <section className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo brand'
        />
      </div>
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </section>
  )
}

export default Instagram
