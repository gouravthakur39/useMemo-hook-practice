import React, { useState, useMemo, useEffect, Fragment } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // useMemo to solve slowFunction
  const doubleNumber = useMemo(() => { 
    return slowFunction(number)
  }, [number])

  // useMemo to solve Referential Equality
  const themeStyles = useMemo(() => {
    return {
    backgroundColor : dark ? 'black' : 'white',
    color : dark ? 'white' : 'black'
  }
}, [dark])

  useEffect(() => {
    console.log('theme changed')
  }, [themeStyles])

  return (
    <Fragment>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)} >Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </Fragment>
  );
}

const slowFunction = (num) => {
  console.log('calling slow function')
  for (let i = 0; i < 10000000; i++) {
    return num * 2
  }
}

export default App;
