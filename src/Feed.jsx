import React, { useEffect, useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import './Feed.css'
import FeedOption from './FeedOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
// import { db } from 'firebase';
// import { db } from './firebase';

// import { input } from '@testing-library/user-event/dist/types/event';

function Feed() {
    const user = useSelector(selectUser)

    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');


    useEffect(() => {

        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }
            )))

        )
        );

    }, [])
    

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            discription: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),


        })

        setInput('');



    }


    return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>

            </div>
            <div className="feed_inputOptions">
                {/* jsx components */}
                <FeedOption Icon = {ImageIcon} title="Photo" color='#70b5f9'/>
                <FeedOption Icon = {SubscriptionsIcon} title="Video" color='#e7a33e'/>
                <FeedOption Icon = {EventNoteIcon} title="Event" color='#c0cbcd'/>
                <FeedOption Icon = {CalendarViewDayIcon} title="Write Artivcle" color='#7fc15e'/>
            </div>
        </div>

        <FlipMove>

        {posts.map(({id,data:{name,discription,message,photoUrl}}) => (
            <Post
            key={id}
            name={name}
            discription={discription}
            message={message}
            photoUrl={photoUrl} />
        ))}
        </FlipMove>
    
        {/* <Post name='ibrahim' discription='this is a first test' message='hello there' /> */}
    </div>
    )
}

export default Feed;