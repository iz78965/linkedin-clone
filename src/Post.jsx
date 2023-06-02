import { Avatar } from '@mui/material'
import './Post.css'
import React from 'react'
import FeedOption from './FeedOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';

function Post({name, discription,message,photoUrl}) {
  return (
    <div className='post'>
        <div className="post_header">
            <Avatar />
            <div className="post_info">
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <FeedOption Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
            <FeedOption Icon={ShareIcon} title='Share' color='gray' />
            <FeedOption Icon={ChatIcon} title='Comment' color='gray' />
            <FeedOption Icon={SendIcon} title='Send' color='gray' />
        </div>
    </div>
  )
}

export default Post