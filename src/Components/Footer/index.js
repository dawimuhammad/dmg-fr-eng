import { Grid } from '@material-ui/core';
import LogoDamogo from '../Assets/logo-damogo.png';
import IconGooglePlay from '../Assets/icon-googleplay.png';
import IconAppstore from '../Assets/icon-app-store.png';
import './index.css';

const FooterStyles = {
  border: "1px solid blue"
};

const Footer = () => {
  return (
    <Grid
      container
      direction="column"
      className="footer-root"
      style={FooterStyles}
    >
      <Grid item>
        <img className="logo-damogo" src={LogoDamogo} alt="DamoGo" />
      </Grid>
      <Grid item container direction="row" style={{ marginTop: "60px" }}>
        <Grid item container xs={8}>
          <Grid item xs={4}>
            <p className="subtitle">Ikuti Kami</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Careers</p>
            <p>About</p>
            <p>CA Supply Chains Act</p>
            <p>Sustainability</p>
            <p>Affiliates</p>
            <p>Recall Info</p>
            <p>Inclusion and Diversity</p>
          </Grid>
          <Grid item>
            <p className="subtitle">Hubungi Kami</p>
            <p style={{ fontWeight: "500" }}>Alamat</p>
            <p>Jl. Prof. Herman Yohanes No.1212,</p>
            <p>Terban, Kec. Gondokusuman, Kota Yogyakarta,</p>
            <p>Daerah Istimewa Yogyakarta 55223</p>
            <p style={{ marginTop: "17px", fontWeight: "500" }}>Jam Buka</p>
            <p>Mon - Fri 6:00 am - 8:00 pm</p>
            <p>Sat & Sun 9:30 am - 6:00 pm</p>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <p className="subtitle">Download DamoGo App</p>
          <img className="icon-googleplay" src={IconGooglePlay} alt="Google Play"/>
          <img className="icon-appstore" src={IconAppstore} alt="App Store"/>
        </Grid>

      </Grid>
    </Grid>
  )
};

export default Footer;