import React from 'react';
import Profile from './profile/component/Profile';
import conan from './conan.png';
import './App.css';

function App() {
  
const handleName =(name)=>{alert(`Profile user name is ${name}`)}
  return (
    <div className="App">
      <Profile 
        fullName="Aymen Ghorbel" 
        bio="I'm a geological enginneer. I am looking forward to be a web-development engineer." 
        profession="Geological engineer" 
        handleName={handleName}>
        <img src={conan} alt="myprofilephoto" />
      </Profile>
    </div>
  );
}

export default App;
