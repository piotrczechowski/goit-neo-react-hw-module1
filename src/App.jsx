import './App.css'
import Profile from './Profile'
import userData from './user.json'

function App() {
  
  return (
    
    <Profile 
      name={userData.name} 
      tag={userData.tag}
      location={userData.location} 
      image={userData.avatar}
      stats={userData.stats}
      />
  )
}

export default App
