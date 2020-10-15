import {
  Avatar,
  Input,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import React from 'react'
import db from './firebase'

const TodoList = ({ id, todo }) => {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='card my-2 '>
              <div className='card-body'>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary={todo.todo} secondary='Dummy Text' />

                    <ListItemSecondaryAction>
                      <IconButton edge='end' aria-label='edit'>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={event =>
                          db.collection('todos').doc(todo.id).delete()
                        }
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TodoList
