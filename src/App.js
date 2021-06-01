import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';
import './App.css';

const AppStyles = {
  border: "1px solid blue",
  padding: "10px"
};

const App = () => {
  return (
    <div className="root">
          <Grid
      container
      style={ AppStyles }
    >
      {/* header component */}
      <Header />
      {/* contents component */}
      <Contents />
      {/* footer component */}
      <Footer />
    </Grid>
    </div>
  )
};

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
