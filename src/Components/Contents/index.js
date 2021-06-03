import { Grid } from '@material-ui/core';
import Banner from './Banner';
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
      <Partner />
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
      <h1>Damogo Contents</h1>
      <PartnerResto />
      <PartnerSupplier />
    </Grid>
  )
};

export default Contents;