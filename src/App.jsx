import './App.css'
import Profile from './components/Profile'
import userData from './components/user.json'
import FriendList from './components/FriendList'
import friends from './components/friendList.json'
import transactions from './components/transactions.json'
import TransactionHistory from './components/TransactionHistory'

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
