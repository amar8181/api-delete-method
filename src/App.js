import './App.css';
import React, { useState } from 'react';

function App() {
  // 
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  // 
  function saveUser() {
    console.log(title, price, description);//------------------//

    let data={title,price,description}
    fetch("https://fakestoreapi.com/products",{
      method:"post",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      // console.log('result',result);
      result.json().then(()=>{
          console.warn("responce",Response)
      })
    })
  }
  return (
    <div className='App'>
      <h1>post api example</h1>
      <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} name='name' /> <br></br><br></br>
      <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name='email' /> <br></br><br></br>
      <input type="text" value={description} onChange={(e) => {setDescription(e.target.value) }} name='mobile' /> <br></br><br></br>
      <button type='button' onClick={saveUser}>Save new user</button>
    </div>
  )

}

export default App;