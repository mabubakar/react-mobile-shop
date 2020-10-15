import React, { useEffect, useState } from 'react'
import './FbMessenger.css'
import SendIcon from '@material-ui/icons/Send'
// import { Button, FormControl, Input } from '@material-ui/core'
import Message from './Message'
import db from './Firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

const FacebookMessenger = () => {
  //Rect Hook UseState => variable in React
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  //React UseEffect => run code on a condition in React

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(
          snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })),
        )
      })
  }, [])

  useEffect(() => {
    //run code here...
    // const name = prompt('please enter your name')
    setUsername(prompt('please enter your name'))
  }, []) //condition if it's blank inside [], this code runs ONCE when the app load

  //Meterial ui send button
  //   const useStyles = makeStyles(theme => ({
  //     button: {
  //       margin: theme.spacing(1),
  //     },
  //   }))
  //   const classes = useStyles()
  //OnChange Handler
  const handleChange = e => {
    setInput(e.target.value)
  }

  //Send Message
  const sendMessage = e => {
    //all the Logic to send a message goes here
    //Prevent refresh on click
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //clear the input field
    setInput('')
  }
  return (
    <>
      <img
        src='https://en.facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
        alt='bran logo'
      />
      <h1>Facebook Messenger</h1>
      <h3>Welcome {username}</h3>
      <form className='app_form'>
        <div class='input-group mb-2'>
          <input
            value={input}
            onChange={handleChange}
            placeholder='Type Here'
            type='text'
            class='form-control'
          />
          <div class='input-group-append'>
            <button
              disabled={!input}
              class='btn btn-primary'
              type='submit'
              onClick={sendMessage}
            >
              Send {<SendIcon />}
            </button>
          </div>
        </div>
        {/* <FormControl>
          <Input
            value={input}
            onChange={handleChange}
            placeholder='Type Here'
            type='text'
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={sendMessage}
          variant='contained'
          color='primary'
          endIcon={<SendIcon />}
        >
          Send
        </Button> */}
      </form>

      <FlipMove>
        {messages.map(({ id, data }) => (
          <Message key={id} username={username} message={data} />
        ))}
      </FlipMove>
    </>
  )
}

export default FacebookMessenger
