import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  // 
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((result) => {
      result.json().then((responce) => {
        // console.warn("result", responce)
        setData(responce)
      })
    })
  }, [])
  console.warn(data)
  // 

  return (
    <div className="App">
      <h1>my-api</h1>
 {/*  */}
 {/* how to create table using api */}
          <table border={1}>
            <tbody>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>price</th>
              <th>description</th>
            </tr>

          
                  {
                    data.map((item)=>
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td>{item.price}</td>
                          <td>{item.description}</td>
                        </tr>
                    )
                  }
              </tbody>
          </table>
  {/*  */}
<hr/>
{/*  */}
{/* hoe toget data from upi */}
                  {
                    data.map((item)=>
                    <div>
                    <p>{item.id}</p>
                    <p>{item.title}</p>
                    <p>{item.price}</p>
                    <p>{item.description}</p>
                    </div>
                    )
                  }
 {/*  */}

    </div>
  );
}

export default App;