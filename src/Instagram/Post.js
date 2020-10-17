import React from 'react'
import { Avatar } from '@material-ui/core'
const Post = ({ username, caption, imageUrl }) => {
  return (
    <section className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt='m abubakar'
          src='https://instagram.fkhi6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120037917_617934372205777_4691175891854271693_n.jpg?_nc_ht=instagram.fkhi6-1.fna.fbcdn.net&_nc_ohc=UK81HkqaRu4AX_HhFmm&oh=e1fea5cebdd1697da943016aa94a76d1&oe=5FB4F0AC'
        />
        <h4>{username}</h4>
      </div>

      <img className='post__image' src={imageUrl} alt='avatar' />
      <h4 className='post__text'>
        <strong>{username}</strong> {caption}
      </h4>
    </section>
  )
}

export default Post
