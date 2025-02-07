import './App.css'
import Profile from './Profile'
import userData from './user.json'
import FriendList from './FriendList'
import friends from './friendList.json'

function App() {
  
  return (
    <>
    <Profile 
      name={userData.name} 
      tag={userData.tag}
      location={userData.location} 
      image={userData.avatar}
      stats={userData.stats}
      />

      <FriendList friends={friends} />  
      </>
  )
}

export default App
