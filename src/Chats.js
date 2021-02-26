import React from 'react'
import Chat from './Chat'
import './Chats.css'
function Chats() {
    return (
        <div className='chats'>
            <Chat
        name="Mark"
        message="Hey how are you 😃!"
        timestamp="40 seconds ago"
        profilePic="https://media.gettyimages.com/photos/portrait-of-a-handsome-man-picture-id1131285202?k=6&m=1131285202&s=612x612&w=0&h=dkpGPCCW5IGTt4rklrwsjon0SX8dkV7YWleQdmQ3nUs="
      />
      <Chat
        name="Oscar"
        message="Loooool"
        timestamp="55 minutes ago"
        profilePic="https://media.gettyimages.com/photos/portrait-of-a-cheerful-young-man-picture-id640021202?k=6&m=640021202&s=612x612&w=0&h=M7WeXoVNTMI6bT404CHStTAWy_2Z_3rPtAghUXwn2rE="
      />
      <Chat
        name="Nicole"
        message="What are you doing"
        timestamp="2 days ago"
        profilePic="https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg"
      />
      <Chat
        name="Cristina"
        message="How is it going?"
        timestamp="1 week ago"
        profilePic="https://www.instyle.es/medio/2020/06/27/cristina-pedroche-tarta-queso_4aeeb946_812x456.jpg"
      />
        </div>
    )
}

export default Chats
