import React, { useEffect, useState } from 'react'
import { Button, Input, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Post from './Post'
import db from './Firebase'
import { auth } from './Firebase'
import ImageUpload from './ImageUpload'
import InstagramEmbed from 'react-instagram-embed'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const Instagram = () => {
  const [modalStyle] = useState(getModalStyle)
  const classes = useStyles()
  const [posts, setPosts] = useState([])
  const [open, setOpen] = useState(false)
  const [openSignIn, setOpenSignIn] = useState(false)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  //useEffect
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user has logged in
        setUser(authUser)
      } else {
        //user has logged out
        setUser(null)
      }
    })
    return () => {
      //perform some cleanup actions
      unsubscribe()
    }
  }, [user, username])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, post: doc.data() })))
    })
  }, [])

  //SignUp Fanctionality here
  const signUp = event => {
    event.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        return authUser.user.updateProfile({
          displayName: username,
        })
      })
      .catch(error => alert(error.message))

    //after signup we want to be Modal close...
    setOpen(false)
  }

  //Sign funcionality here
  const signIn = event => {
    event.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .catch(error => alert(error.message))

    //after signin we want to be Modal close...
    setOpenSignIn(false)
  }

  return (
    <section className='app'>
      {/* SignUp Model */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='instagram__signup'>
            <center>
              <img
                className='app__headerImage my-3'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt='logo brand'
              />
            </center>
            <Input
              className='mt-3'
              placeholder='username'
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              className='mt-3'
              placeholder='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              className='mt-3'
              placeholder='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='mt-4'
              variant='contained'
              color='primary'
              onClick={signUp}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Modal>

      {/* SignIn Model */}
      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className='instagram__signup'>
            <center>
              <img
                className='app__headerImage my-3'
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt='logo brand'
              />
            </center>
            <Input
              className='mt-3'
              placeholder='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              className='mt-3'
              placeholder='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              className='mt-4'
              variant='contained'
              color='primary'
              onClick={signIn}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Modal>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='logo brand'
        />
        {user ? (
          <button
            className='btn btn-outline-warning'
            onClick={() => auth.signOut()}
          >
            Log Out
          </button>
        ) : (
          <div className='instagram__loginContainer'>
            <button
              className='mx-2 btn btn-outline-info'
              variant='outlined'
              color='primary'
              onClick={() => setOpenSignIn(true)}
            >
              Sign In
            </button>
            <button
              className='btn btn-outline-success'
              onClick={() => setOpen(true)}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            {posts.map(({ id, post }) => (
              <Post
                key={id}
                postid={id}
                user={user}
                username={post.username}
                caption={post.caption}
                imageUrl={post.imageUrl}
              />
            ))}
          </div>
          <div className='col-md-5'>
            <InstagramEmbed
              url='https://www.instagram.com/p/CGc1etvnx8K/?utm_source=ig_web_copy_link'
              maxWidth={520}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/CGekmDshcmG/?utm_source=ig_web_copy_link'
              maxWidth={520}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
            <InstagramEmbed
              url='https://www.instagram.com/p/CGCL_zkJ75X/?utm_source=ig_web_copy_link'
              maxWidth={520}
              hideCaption={false}
              containerTagName='div'
              protocol=''
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3>Sorry you neet to Login to Upload</h3>
      )}
    </section>
  )
}

export default Instagram
