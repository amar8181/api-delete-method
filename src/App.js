import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  // 
  const [data, setData] = useState([])
  useEffect(() => {
    getList();
  }, [])

  function getList() {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }
  // 

  function deleteUser(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
     
    }) .then(response => response.json())
    .then(() => {
      setData(values => {
        return values.filter(item => item.id !== id)
      })

      })
    }
  

  return (
    <div className="App">
      <h1>my-api</h1>
      <table border={1}>
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
          </tr>

          {
            data.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
              </tr>
            )
          }
        </tbody>
      </table>




      {/*  */}
      {/* <hr /> */}
      {/*  */}

      {/* how toget data from upi */}
      {/* {
                    data.map((item)=>
                    <div>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    </div>
                    )
                  } */}
      {/*  */}

    </div>
  );
}

export default App;