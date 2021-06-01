import { Grid } from '@material-ui/core';

const HeaderStyles = {
  border: "1px solid purple"
};

const Header = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={HeaderStyles}
    >
      <h1>Header</h1>
    </Grid>
  )
};

export default Header;