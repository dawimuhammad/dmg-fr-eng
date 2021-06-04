import { Grid } from '@material-ui/core';
import MockupCeker from '../../Assets/mockup-ceker-surrounded.png';
import './index.css';

const Blog = () => {
  return (
    <Grid
      container
      direction="row"
      className="blog-root"
    >
      <Grid item xs={7} style={{ paddingRight: "100px" }}>
        <p className="container-heading yellow">B L O G</p>
        <p className="container-title">Cara menyimpan daging agar awet dan segar tanpa Freezer</p>
        <p className="container-content-writing" style={{ marginTop: "55px", marginBottom: "55px",  }}>
          Sudah banyak orang yang tahu jika menyimpan daging dalam freezer menjadi cara mudah menyimpan stok daging
          supaya awet dan tahan lama. Tapi bagaimana ya jika tidak memiliki kulkas atau freezer? Tenang! Ada kok caranya,
          <span style={{ fontWeight: "bold", color: "#FFBB00" }}> yuk disimak!</span>
        </p>
        <a href="https://damogoapp.com" target="_blank" rel="noreferrer" className="a-button-full yellow">Baca Selengkapnya</a>
      </Grid>
      <Grid item xs={5} className="right">
        <div className="half-elipse-yellow" />
        <img className="mockup-ceker" src={MockupCeker} alt="" />
      </Grid>
    </Grid>
  )
};

export default Blog;