import { Grid } from '@material-ui/core';
import LogoAlfamidi from '../../Assets/logo-partner-alfamidi.png';
import LogoAmbarukmo from '../../Assets/logo-partner-plaza-ambarukmo.png';
import LogoMaskobis from '../../Assets/logo-partner-maskobis.png';
import LogoHakata from '../../Assets/logo-partner-hakata.png';
import './index.css'

const Partner = () => {
  return (
    <Grid
      container
      direction="column"
      className="partner-root"
    >
      <Grid item className="flex-center">
        <p className="container-heading blue">D A M O G O</p>
      </Grid>
      <Grid item className="flex-center">
        <p className="container-title">Kerjasama</p>
      </Grid>
      <Grid item container direction="row" className="flex-center">
        <img className="logo-partner alfa" src={LogoAlfamidi} alt="" />
        <img className="logo-partner ambarukmo" src={LogoAmbarukmo} alt="" />
        <img className="logo-partner kobis" src={LogoMaskobis} alt="" />
        <img className="logo-partner hakata" src={LogoHakata} alt="" />
      </Grid>
    </Grid>
  )
};

export default Partner;