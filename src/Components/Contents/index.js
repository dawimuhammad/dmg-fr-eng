import { Grid } from '@material-ui/core';

const ContentStyles = {
  border: "1px solid green"
};

const Contents = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={ ContentStyles }
    >
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
    </Grid>
  )
};

export default Contents;