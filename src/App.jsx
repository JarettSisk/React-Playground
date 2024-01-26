import {useEffect, useState} from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState(null);

    const handleIncrement = () => {
      setCount(count + 1);
    }

    useEffect(() => {
        // runs on initial render, and then again on count changes.
        setMessage(`You've clicked increment ${count} times!`)
    }, [count]);

  return (
    <>
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "100vw"}}>
            <h1>{message}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
        </div>

    </>
  )
}

export default App
