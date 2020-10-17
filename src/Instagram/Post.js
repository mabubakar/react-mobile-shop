import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import firebase from 'firebase/app'
import db from './Firebase'
const Post = ({ postid, user, username, caption, imageUrl }) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    let unsubscribe
    if (postid) {
      unsubscribe = db
        .collection('posts')
        .doc(postid)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setComments(snapshot.docs.map(doc => doc.data()))
        })
      return () => {
        unsubscribe()
      }
    }
  }, [postid])

  const postComment = event => {
    event.preventDefault()
    db.collection('posts').doc(postid).collection('comments').add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setComment('')
  }
  return (
    <section className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar text-capitalize'
          alt={username}
          src={username}
        />
        <h4>{username}</h4>
      </div>

      <img className='post__image' src={imageUrl} alt='avatar' />
      <h4 className='post__text'>
        <strong>{username}</strong> {caption}
      </h4>
      {
        <div className='post__comment'>
          {comments.map(comment => (
            <p>
              <strong>{comment.username}</strong>
              <span className='comment__text'>{comment.text}</span>
            </p>
          ))}
        </div>
      }
      {user && (
        <form className='post__commentBox'>
          <input
            className='post__input'
            type='text'
            placeholder='Add a Comment'
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button
            disabled={!comment}
            type='submit'
            onClick={postComment}
            className='btn post__btn'
          >
            Post
          </button>
        </form>
      )}
    </section>
  )
}

export default Post
