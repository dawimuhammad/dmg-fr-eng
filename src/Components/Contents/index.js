import { Grid } from '@material-ui/core';
import Banner from './Banner';
import Demo from './Demo';
import Blog from './Blog';
import Partner from './Partner';
import PartnerResto from './PartnerResto';
import PartnerSupplier from './PartnerSupplier';

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
      <Demo />
      <Blog />
      <Partner />
      <PartnerResto />
      <PartnerSupplier />
    </Grid>
  )
};

export default Contents;