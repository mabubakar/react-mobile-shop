import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import React from 'react'
import db from './firebase'

const TodoList = ({ id, todo }) => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={todo.todo} secondary='Dummy Text' />
          <ListItemSecondaryAction>
            <IconButton
              edge='end'
              aria-label='delete'
              onClick={event => db.collection('todos').doc(todo.id).delete()}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  )
}

export default TodoList
