/* eslint-disable react/prop-types */
import  { useEffect, useRef, useState } from 'react';
import './App.css';
import Profile from './components/profile';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
 
  const inputRef = useRef();

  useEffect(() => {
    if (!username) {
      return;
    }
  
    fetch(`https://api.github.com/users/${username}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GitHub API request failed: ${response.statusText}`);
        }
        const data = await response.json(); // Extract JSON data
        setUserData(data);
      })
      .catch((err) => {
        setUserData(null);
        console.error(err); // Log the error for debugging
      });
  }, [username]);
  

  const handleSearch = () => {
    setUsername(inputRef.current.value);
  };

  return (
    <div className="app-container">
      <div className='container'>
        <input  type="text" ref={inputRef} placeholder="Enter GitHub username" />
        <button onClick={handleSearch}>Search</button>
      </div>
      
   
      <Profile userData={userData}></Profile>
    </div>
  );
}



export default App;
