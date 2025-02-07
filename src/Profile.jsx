export default function Profile({name, tag, location, image, stats} ) {
    
    const userData = {
        name: 'Jacques Gluke',
        tag: 'jgluke',
        location: 'Ocho Rios, Jamaica',
        avatar:
          'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
        stats: {
          followers: 5603,
          views: 4827,
          likes: 1308,
        },  
    }
    
    return ( 
        <> 
        <div>
            <img src={image} alt={`${name} avatar`} />
            <p>{name}</p>
            <p>@{tag}</p>
            <p>{location}</p>
            
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{stats.likes}</span>
            </li>
        </ul>

        </>
       
    )
}