import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="root">
      <Grid
        container
      >
        <Header />
        <Contents />
        <Footer />
      </Grid>
    </div>
  )
};

export default App;
