import React from 'react';
import Header from './Header';
import KegControl from './Control';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';


function App() {
  return (
    <React.Fragment>
      <Jumbotron>
        <Header />
      </Jumbotron>
      <Container>
        <KegControl />
      </Container>  
    </React.Fragment>
  );
}

export default App;
