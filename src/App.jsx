import './App.css'
import Profile from './Profile'
import userData from './user.json'
import FriendList from './FriendList'
import friends from './friendList.json'
import transactions from './transactions.json'
import TransactionHistory from './TransactionHistory'

function App() {
  
  return (
    <>
    <Profile 
      name={userData.username} 
      tag={userData.tag}
      location={userData.location} 
      image={userData.avatar}
      stats={userData.stats}
      />

      <FriendList friends={friends} />  
      <TransactionHistory items={transactions} />
      </>
  )
}

export default App
