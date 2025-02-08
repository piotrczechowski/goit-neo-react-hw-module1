import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.friendCard}>
      <img src={avatar} alt={`${name} avatar`} />
      <div>
        <p className={styles.friendName}>{name}</p>
        <p className={isOnline ? styles.statusOnline : styles.statusOffline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  );
}
