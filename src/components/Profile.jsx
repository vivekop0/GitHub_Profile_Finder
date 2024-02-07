/* eslint-disable react/prop-types */
export default function Profile({userData}) {
    if (!userData) {
        return null; // or render a loading state, an error message, or an empty profile
      }
      const imgStyle={
        backgroundImage: `url(${userData.avatar_url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', 
      }
  return (
    <div className="main">
      <div className="card" >
         <div className="baground">
          <div className="images" style={imgStyle}>
          
          </div>
         </div>

         <div className="user-details">
         <h1>{userData.name}</h1>
  <p>{userData.location}</p>
         </div>
       
         <div className="line"></div>
         <div className="like-flower">
          <div className="flowers">
          <h1>{userData.followers}</h1>
          <p>Followers</p>
          </div>
          <div className="likes">
          <h1>{userData.following}</h1>
          <p>following</p>
           </div>
          <div className="photo" >
          <h1>{userData.public_repos}</h1>
          <p>Repositories</p>
          </div>
        </div>
      </div>
    </div>
  );
}
