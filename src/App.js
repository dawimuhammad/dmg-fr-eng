import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';
import './App.css';

const AppStyles = {
  padding: "0 120px"
};

const App = () => {
  return (
    <div className="root">
      <Grid
        container
        style={ AppStyles }
      >
        <Header />
        <Contents />
      </Grid>
      <Footer />
    </div>
  )
};

export default App;
