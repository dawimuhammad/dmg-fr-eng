import { Grid } from '@material-ui/core';

const FooterStyles = {
  border: "1px solid red"
};

const Footer = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={FooterStyles}
    >
      <h1>Footer</h1>
    </Grid>
  )
};

export default Footer;