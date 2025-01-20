import './App.css'
import {useEffect} from "react";

function App() {
    useEffect(() => {
        document.title = process.env.REACT_APP_NAME;
    }, []);

  return (
    <>
      <h1>ReactJs Template</h1>
    </>
  )
}

export default App
