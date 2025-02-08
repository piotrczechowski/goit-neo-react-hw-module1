import "./FriendListItem.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="friend-card">
      <img className="friend-card" src={avatar} alt={`${name} avatar`} />
      
      <div>
        <p className="friend-name">{name}</p>
        <p className={isOnline ? "status-online" : "status-offline"}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
