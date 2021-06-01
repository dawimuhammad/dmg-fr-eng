import { Grid } from '@material-ui/core';
import Logo from '../Assets/logo-damogo.png';
import './index.css';

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="space-between"
      className="header-root"
    >
      <Grid item xs={6}>
        <img className="logo-damogo" src={Logo} alt="DamoGo"></img>
      </Grid>
      <Grid 
        item 
        xs={6}
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid className="top-anchor">
          <a className="active" href="">Beranda</a>
          <div className="dot active" />
        </Grid>
        <Grid className="top-anchor">
          <a href="">Restoran</a>
          <div className="dot" />
        </Grid>
        <Grid className="top-anchor">
          <a href="">Supplier</a>
          <div className="dot" />
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Header;