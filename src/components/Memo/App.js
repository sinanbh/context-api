import React, { useCallback, useEffect, useState } from "react"
import MemoReact from "./components/ReactMemo/ReactMemo"

function App() {
  // console.log("App")
  const [num, setNum] = useState(Math.random())
  const [counter, setCounter] = useState(0)

  const handleChange = useCallback(() => {
    setCounter(counter + 1)
  }, [counter])

  useEffect(() => {
    console.log("Message App")
  }, [counter])

  // useEffect(() => {
  //   setInterval(() => {
  //     setNum(Math.random().toFixed(2))
  //   }, 2000)
  // }, [])
  return (
    <div>
      <h1>Num: {num} </h1>
      <MemoReact counter={counter} handleChange={handleChange} />
    </div>
  )
}

export default App