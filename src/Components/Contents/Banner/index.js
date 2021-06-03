import { Grid } from '@material-ui/core';
import ImgFruit from '../../Assets/asset-fruits.png';
import IconWhatsapp from '../../Assets/icon-whatsapp.png';
import IconBag from '../../Assets/icon-bag-white.png';
import IconDmg from '../../Assets/icon-dmg-white.png';
import IconShop from '../../Assets/icon-shop-white.png';
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
      <Grid xs={6} item className="right">
        <div className="bg-shape-blue" >
          <div className="dot-blurred"/>
          <div className="dot-blurred yellow"/>
          <div className="dot-blurred green"/>
          <div className="shape-whatsapp" >
            <img className="icon-whatsapp" src={IconWhatsapp} alt="whatsapp" />
          </div>
        </div>

        <div className="elipse green" />
        <div className="elipse yellow" />
        <div className="elipse blue" />

        <div className="top">
          <img className="img-fruit" src={ImgFruit} alt="" />
          <div className="shape-icon bag">
            <img className="icon-bag" src={IconBag} alt="" />
          </div>
          <div className="shape-icon shop">
            <img className="icon-shop" src={IconShop} alt="" />
          </div>
          <div className="shape-icon squared">
            <img className="icon-dmg" src={IconDmg} alt="" />
          </div>
        </div>
      </Grid>
    </Grid>
  )
};

export default Banner;