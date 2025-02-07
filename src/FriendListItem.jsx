import "./FriendListItem.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      listStyle: "none",
      width: "250px"
    }}>
      <img 
        src={avatar} 
        alt={`${name} avatar`} 
        width="48" 
        style={{ borderRadius: "50%" }}
      />
      <div>
        <p style={{ fontWeight: "bold", margin: "0" }}>{name}</p>
        <p className={isOnline ? "status-online" : "status-offline"}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}
