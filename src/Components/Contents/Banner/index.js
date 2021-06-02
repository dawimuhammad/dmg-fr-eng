import { Grid, Typography } from '@material-ui/core';
import ImgFruit from '../../Assets/asset-fruits.png';
import './index.css';

const Banner = () => {
  return (
    <Grid
      container
      direction="row"
      className="banner-root"
    >
      <Grid xs={6} item container direction="column" style={{ paddingRight: "77px" }}>
        <Grid item>
          <p className="tagline">Create taste,</p>
          <p className="tagline">
            <span>not </span>
            <span className="green">waste</span>
          </p>
        </Grid>
        <Grid item style={{ marginTop: "20px", marginBottom: "40px" }}>
          <p>Selamatkan makanan lezat, makanan tidak terjual dari restaurant
             favoritmu, toko, dan pertanian agar tidak terbuang sia-sia serta
             dapatkan harga hemat hingga 90% dari harga reguler!</p>
        </Grid>
        <Grid item>
          <span>
            <a className="a-button-full">Buat Janji Temu!</a>
          </span>
          <span style={{ marginLeft: "24px" }}>
            <a className="a-button-outline">Bertemu Tim Kami</a>
          </span>
        </Grid>
      </Grid>
      <Grid xs={6} item container direction="column" className="right">
        <div className="bg-shape-blue"/>
        <div className="elipse green" />
        <div className="elipse yellow" />
        <div className="elipse blue" />
          <img className="img-fruit" src={ImgFruit} alt="" />
      </Grid>
    </Grid>
  )
};

export default Banner;