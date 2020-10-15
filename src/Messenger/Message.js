import React, { forwardRef } from 'react'
import { Card, CardContent, ListItemText, Typography } from '@material-ui/core'

const Message = forwardRef(({ username, message }, ref) => {
  const isUser = username === message.username

  return (
    <>
      <div ref={ref} className={`message ${isUser && 'message_user'}`}>
        <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              <ListItemText
                primary={message.message}
                secondary={!isUser && `${message.username || 'Unnown User'}`}
              />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
})

export default Message
