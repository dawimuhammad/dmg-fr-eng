import { Grid } from '@material-ui/core';
import MockupResto from "../../Assets/mockup-resto.png";
import './index.css';

const PartnerResto = () => {
  return (
    <Grid
      container
      direction="row"
      className="resto-root"
    >
      <Grid item xs={5} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
        <div className="mockup-shadow blue" />
        <img className="mockup-resto" src={MockupResto} alt="DamoGo for Resto" />
      </Grid>
      <Grid item xs={7} style={{ marginTop: "53px" }}>
        <p className="container-heading white">D A M O G O</p>
        <p className="container-title white">Untuk Restoran</p>
        <p className="container-content-writing white" style={{ marginTop: "55px", marginBottom: "55px" }}>Aplikasi gratis kami adalah cara paling efisien untuk memesan
          dari semua pemasok Anda. Selesaikan pesanan lebih cepat, tidur lebih awal.
        </p>
        <a className="a-button-full dark-blue">Pelajari Selengkapnya</a>
      </Grid>
    </Grid>
  )
};

export default PartnerResto;