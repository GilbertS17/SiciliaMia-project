import React, { useEffect, useState }from 'react'
import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
//importing bootstrap cdn so the design be responsive
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {

  const [apiData, setApiData] = useState([])
  
  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
    .then(response => response.json())
    .then(data => {setApiData(data)}) 
    console.log(apiData)  
  },[])
  
  // ⬇⬇ Uncomment here 1st ⬇⬇

  // const cards = apiData.entries.map(item => {
  //   return (
  //     <Card 
  //       item={item}
  //     />
  //   )
  // })

  
  return (
    <div className='main-div'>
      <Navbar />
      <hr/>
      <div className="cards-container">
        <Container>
          <Row>
            {/* ⬇⬇ Uncomment here 2nd ⬇⬇ */}
            {/* {cards} */}
            
            {/* ⬇⬇ Comment here ⬇⬇*/}
            <h1>!!!Go to README.md and read the important section!!!</h1>
          </Row>
        </Container>

      </div>
    </div>
  );
}

export default App;
