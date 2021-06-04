import { Grid } from '@material-ui/core';
import MockupApp from '../../Assets/mockup-app.png';
import './index.css';

const Demo = () => {
  return (
    <Grid
      container
      direction="column"
      className="demo-root"
    >
      <p className="container-heading blue" style={{ textAlign: "center" }}>D A M O G O</p>
      <p className="container-title" style={{ textAlign: "center", marginBottom: "37px" }}>Demo Aplikasi</p>
      <Grid 
        item 
        container 
        direction="row" 
        justify="space-between" 
        className="flex-center"
      >
        <Grid 
          item 
          xs={12} 
          sm={5} 
          className="left flex-center"
        >
          <div className="elipse outer" />
          <div className="elipse middle" />
          <div className="elipse full" />
          <img className="mockup-app" src={MockupApp} alt="" />
        </Grid>
        <Grid 
          item 
          xs={12} 
          sm={7} 
          style={{ paddingLeft: "31px" }}
        >
          <p className="container-content-writing" style={{ marginBottom: "31px" }}>
          <span style={{ color: "#00A3F4", fontWeight: "bold" }}>DamoGo</span> adalah sistem yang membantu proses pengadaan bahan makanan lebih mudah dan efisien! 
          </p>
          <p className="container-content-writing" style={{ marginBottom: "60px" }}>
            Atur semua pesanan dari supplier maupun bahan dari kamu ke franchise secara online.
          </p>
          <a href="https://damogoapp.com" target="_blank" rel="noreferrer" className="a-button-full">Lihat Demo</a>
        </Grid>
      </Grid>
      <div className="elipse blurred" />
    </Grid>
  )
};

export default Demo;