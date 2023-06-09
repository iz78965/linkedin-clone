import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hashtag'>#</span>
            <p>{topic}</p>
        </div>
    );
  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXGBoXFxgXFRcVFxgVFRUXFxcYFRUYHSggGB0lHRUXIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDw0NDisZFRkrKys3LSsrKysrKysrKy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAZAAADAQEBAAAAAAAAAAAAAAABAgMABAf/xAArEAADAAIBBAEDAwQDAAAAAAAAAQIRIQMSMUFRYXGB8JGhsQQT4fEywdH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APYyeR2TkBnZKrNbIWwOlUF9yXEi+AAmCWEVsB8GTBLNkBaGMxXQUUw5J0FAUyKgJmTAYDoGwZCCn6D1bE+gz3sCmAsWWEKKYeoQ2AGChMDgZiNDgAhzrTBxV4DzvTFlaQQyZOrYzsjQFosFPyTigsA5ZhMBA7WyUMazk4q3sCt1lkkg+zcSAeax/wBDvkE6R1xgNDMh1PgRoDZGQsofACsnRRk3IDSzPuBMzQAfoc2DYABm9h6TAA1BTC1kBoC0DpAwpkIrDjAGghpYyYsrQy2AyABv/YWFQ/qFoVVpB/qnohP/ABCDyUT6hsaEuQDLCmJKKKc7AZP4MN9gAdFtHNMbZ0UznT36AagJrwI++C0SBuMtxsk2Mq9AUTNQmxZTwBWEZgkD7gBsVsZywUgAkNgTI2QGSGFlBbAwWBBkAdI2AsCYVjZRmBoDMDBQrb7eAitPH1BMgmSiADkGRnQoVHnXclwryPyVpicS8BApbJ8r2VlZZrjQEZ7F0vBNSVl57AFMwFL/ADBgKci85JdOzoqSdLCAlhFHX6krr9QxXxsB4kopJzeDNtgU7ghAU/IyfwAzEqcji4AWUx8e8Chj2BukEobIuQHQrYZYtAMhsEpr5KTsA5Ezgd0kLpgUQtPsFMly+PqBVC42BsADozrQGxOvvkCgPAsDN6YEbklC7/5Oip0JSAVUbkr0K3vQtvwA8r77HITQyT8gdEoxHpYAOrJPk7ZGd47k3ecgK0njBmvz4DGw43sA8c9x8HO7Y8XrYBztFUSXwPL/AMANkFz5Mu4rvv8AoBkzPsCKCgCtf+myF0CgA7FbA2ZUAWisk2xlQC8tb+BopE4Z0RX3AW8EaznZ0cglLaALwws0rZgFtAU5M3l4GnsAEsgd6B5yDkz4/wBgZV5Frv5x/AFWmLb7AOp8/n6CXI8Azr5A0pYGc6Iyy6a7N7Ajb2Yeu5gH5GmsrwQzo01h/wAm5ZwwHmhXQZXfL+wuAHVIMdyapopx19sgVQKYHWES6gHyMxV2A6ACop1EH7H8ICyQKeiSyhpYAX7gNS9E+oC0h8fTIstaK18AT40XROUUwAKZPO0Na/QXHkCyYKYssGGBgOhmyDewKugdSX0EruLySAeSdZQjZT+nfdEqneAN16B1mqdCtAUqh+OiHUUh67/nyBRACuRewATtBl5WGJaBDxQDdOQwK5BIFDIRLJWZ7ANhCShkjUsZAR0uwGwhwAiHSDMj5AL7bFb0w8j7CPsBNmYekCAeJetlcCZGQBmx/wC4ImK7AsqI8r/Yz5PZzqgOjjrZZ36IqPlgUMCvUSs3QzUAIYKoNIRIAzlbG5HnYmDQtNfdAK4FM0KwDkKYsjNAHC9mNgAFbX59xVI9+H+dxU9ACnrIkjUCQKRWB4omh5QFcAtDSLewJ0g5/kPIg69gK9BSBYOoCjQmBXQsgM0TZSGTYFkhkyUUMmBVkaHYtICdB452DBWEBZdjI2ATQAyJaGewPuAnIt/yBsa2I34/Ngal/IaWN/mAY/ka2BK0JgexEAUNIoyQGMOjAaq0KNaJsDBQONbC34AeUUwSkrn0BSFoWxJrDDV5ANPQsmzk2PqAGwSM+wEtgFpA1gbHcnTA2dE2FgApxx7GTEllFgBkwNZA62ZMAqB5WBBkwHS0S8D1RKs7AZPeRHRkLTAzoOBEVgA1+fsLTKWQYAFYyQGAEgpACgLT2MTV4CBrFY9k2AyfpC4aYUhmgMHyIUjIGp72NgpEBcegI9hkCkZsDU/A0/IkjpbADeibRXoEsCVgGYqQByUySwVeAD0hXkCNKAbytjNCSVj5AzXwKUYF3AiyTRbkJJALgKZsBSALrf56EyNTESAKyCWGDADBkYKYAZh0zAF9xXODoicoXoeAJNGegvQrAKL8ckYKzWNgWwBsi+YKv0At0KtgtiZAumhyEV4KKsAP1CX9DUK2wEvsLJS+wiApUgpDNjdPgCaYzEaaCmBkOqFwHADzZhP7n0KqQI0LJa0TyAlBQEFL0AenJukp0ayJcsCb7gbBk2AMwoDRmBRL5MJlmA7EjWYwEq4ybkJgNKBb8GMArRRdjGAjkOjGAaZNxyzGAoOloxgFcaJGMBRbyHO0AwAeMfcmzGArA6W/sEwEXDOrjXYBgBfGRtGMAqH45MYCifhErZjAS6QYMYDC5AYAmMYD/9k=" alt="backgroung image" />
            <Avatar src={user.photoUrl} className='sidebar_avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            
        </div>
        <div className="sidebar_stats">
            
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className="sidebar_statNumber">2098</p>
            </div>
            <div className="sidebar_stat">
            <p> views on your feed</p>
                <p className="sidebar_statNumber">1098</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recents</p>
            {recentItem("Reactjs")}
            {recentItem("Programming")}
            {recentItem("Software Engineering")}
            {recentItem("Design")}
            {recentItem("Developers")}
            {recentItem("Artificial Intelligence")}
        </div>
    </div>
  )
}

export default Sidebar