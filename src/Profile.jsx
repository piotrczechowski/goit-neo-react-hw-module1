import "./Profile.css";

export default function Profile({name, tag, location, image, stats} ) {
    

    
    return ( 
        
        <div className="profile-card">
            <img src={image} alt={`${name} avatar`} className="profile-avatar"/>
            <p className="profile-name">{name}</p>
            <p className="profile-tag">@{tag}</p>
            <p className="profile-location">{location}</p>
            
        

        <ul className="profile-stats">
            <li className="profile-stat-item">
                <span className="profile-stat-label">Followers</span>
                <span className="profile-stat-value">{stats.followers}</span>
            </li>
            <li className="profile-stat-item">
                <span className="profile-stat-label">Views</span>
                <span className="profile-stat-value">{stats.views}</span>
            </li>
            <li className="profile-stat-item">
                <span className="profile-stat-label">Likes</span>
                <span className="profile-stat-value">{stats.likes}</span>
            </li>
        </ul>

        </div>
       
    )
}