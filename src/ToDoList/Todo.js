import React, { useEffect, useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import TodoList from './TodoList'
import db from './firebase'
import firebase from 'firebase'
import './todo.css'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //when the app loads, we need to listen the data base and fetch new todos as they get add/remove
  useEffect(() => {
    //this code here ... fire when Todo.js loads
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setTodos(
          snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })),
        )
      })
  }, [])

  const addTodo = event => {
    event.preventDefault() //will stop the refresh

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('') //clear the input after hitting the add todo button
  }
  return (
    <section className='text-center my-5'>
      <h1>ToDo</h1>
      <form className='text-center my-3'>
        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input
            value={input}
            onChange={event => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='primary'
          className='mx-3'
        >
          Add Todo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <TodoList todo={todo} key={todo.id} />
        ))}
      </ul>
    </section>
  )
}

export default Todo
