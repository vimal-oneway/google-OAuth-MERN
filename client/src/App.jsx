import { useState } from 'react'
import './App.css'
import axios from 'axios'
axios.defaults.withCredentials=true;

function App() {
  const [count, setCount] = useState(0)

  const handleClick = (event) => {
    axios.get('http://localhost:8080/api/google',{
      mode:'cors',
      headers: {
          'Content-Type': 'application/json; charset=utf-8',
          "Access-Control-Allow-Origin": ["http://localhost:8080/api/google","https://accounts.google.com/o/oauth2/v2/auth"],
          "X-Powered-By":"Express",
      }
  });
  }

  return (
    <div className="App">
      <div className="form">
        <form action="http://localhost:8080/api/google">
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default App
