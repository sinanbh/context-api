import { createContext, useState } from 'react';
import './App.css';
import ChildOne from './components/context/childOne';

export const MyName = createContext();
export const Institute = createContext();
export const Role = createContext();
export const MyCounter = createContext();

function App() {

  const [counter, setCounter] = useState(0);

  const obj = {
    counter,
    handleChange: () => setCounter(counter + 1)
  };

  return (
    <div className="App">
      <h1>counter: {counter}</h1>
      <MyName.Provider value={"Sinan"}>
        <Institute.Provider value={"Prepbytes"}>
          <Role.Provider value={"MERN Stack Dev"}>
            <MyCounter.Provider value={obj}>
              <ChildOne />
            </MyCounter.Provider>
          </Role.Provider>
        </Institute.Provider>
      </MyName.Provider>
    </div>
  );
}

export default App;
// export {MyName};