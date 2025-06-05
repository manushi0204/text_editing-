
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode,setdark]= useState('light');
 const toggleMode=() => {
  if(mode ==='light'){
  setdark('dark')}

  else{
  setdark('light')}

  }
  return (<>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <div className='container my-3'>
    <TextForm heading="Enter the txt"/>
    
   </div>
  
 
   </>
  );
}

export default App;
