
import styles from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileCard}>
      <img
        src={image}
        alt={`${name} avatar`}
        className={styles.profileAvatar}
      />
      <p className={styles.profileName}>{name}</p>
      <p className={styles.profileTag}>@{tag}</p>
      <p className={styles.profileLocation}>{location}</p>

      <ul className={styles.profileStats}>
        <li className={styles.profileStatItem}>
          <span className={styles.profileStatLabel}>Followers</span>
          <span className={styles.profileStatValue}>
            {stats.followers}
          </span>
        </li>
        <li className={styles.profileStatItem}>
          <span className={styles.profileStatLabel}>Views</span>
          <span className={styles.profileStatValue}>{stats.views}</span>
        </li>
        <li className={styles.profileStatItem}>
          <span className={styles.profileStatLabel}>Likes</span>
          <span className={styles.profileStatValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
