import { useEffect, useState } from 'preact/hooks'
import './app.css'

export function App() {

  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  

  useEffect(() =>{
    let interval: number | undefined // since you are using typescript
    if(running){
      interval = setInterval(()=>{
        setTime((prevTime) => prevTime + 10); // Update the time
      }, 10);
    }
    else if(!running){
      clearInterval(interval)
    }

    return () => clearInterval(interval);
  }, [running])


  return (
    <>
      <h1>StopWatch Using React.JS</h1>

      <div className={"span"}>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className={"buttons"}>
        {running ?
          (<button onClick={() => { setRunning(false) }}>Stop</button>)
            : 
          (<button onClick={() => { setRunning(true) }}>Start</button>)
        }
        
        
        <button onClick={() => { setTime(0) }}>Reset</button>
      </div>
    </>
  )
}
