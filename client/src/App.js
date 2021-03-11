import { useState, useEffect } from 'react'
import './App.css';

function getUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:5000' + path
  }
  return path
}

function App() {
  const [message, setMessage] = useState('hello Web 39')
  useEffect(() => {
    fetch(getUrl('/api/hello'))
      .then(res => res.json())
      .then(resBody => setMessage(resBody.message))
      .catch(err => {
        debugger
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {message}
      </header>
    </div>
  );
}

export default App;