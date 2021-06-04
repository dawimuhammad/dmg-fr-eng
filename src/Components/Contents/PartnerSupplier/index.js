import { Grid } from '@material-ui/core';
import MockupSupplier from "../../Assets/mockup-supplier.png";
import './index.css';

const PartnerSupplier = () => {
  return (
    <Grid
      container
      direction="row"
      className="supplier-root"
    >
      <Grid item xs={7} style={{ marginTop: "53px" }}>
        <p className="container-heading white">D A M O G O</p>
        <p className="container-title white">Untuk Supplier</p>
        <p className="container-content-writing white" style={{ marginTop: "55px", marginBottom: "55px" }}>
          Baik Anda adalah pertanian milik keluarga atau distributor nasional, platform khusus kami akan mengubah cara Anda
          berbisnis. Hemat waktu untuk tugas manual, kurangi kesalahan pesanan, dan jual lebih banyak produk.
        </p>
        <a href="https://damogoapp.com" target="_blank" rel="noreferrer" className="a-button-full dark-green">Pelajari Selengkapnya</a>
      </Grid>
      <Grid item xs={5} style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
        <div className="mockup-shadow green" />
        <img className="mockup-supplier" src={MockupSupplier} alt="DamoGo for Supplier" />
      </Grid>
    </Grid>
  )
};

export default PartnerSupplier;