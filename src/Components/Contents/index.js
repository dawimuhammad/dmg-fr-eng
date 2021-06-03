import { Grid } from '@material-ui/core';
import Banner from './Banner';
import Partner from './Partner';

const ContentStyles = {

};

const Contents = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={ ContentStyles }
    >
      <Banner />
      <Partner />
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
      <div style={{ height: "500px" }} ></div>
    </Grid>
  )
};

export default Contents;