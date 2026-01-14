import Navbar from "../Components/Navbar";
import styles from "../Styles/gallery.module.css";
import I from "../assets/Gallery/I.png";
import I1 from "../assets/Gallery/I1.png";
import I2 from "../assets/Gallery/I2.png";
import I3 from "../assets/Gallery/I3.png";
import I4 from "../assets/Gallery/I4.png";
import I5 from "../assets/Gallery/I5.png";
import I6 from "../assets/Gallery/I6.png";
import I7 from "../assets/Gallery/I7.png";
import I8 from "../assets/Gallery/I8.png";
import Footer from "../Components/Footer.jsx";
import Services from "../Components/Services.jsx";
import WorkWithUs from "../Components/WorkWithUs.jsx";
function Gallery() {
  return (
    <>
  
      <div className= {styles.header}>
      <h1 className="heading1 head">GALLERY</h1>
      </div>
    <div className= {styles.main}>
<div className= {styles.container}>
    <p className= {styles.paragraph}>SEASONAL ARRANGEMENTS  </p>
    <div className= {styles.galleryContainer}>
        <img src={I} alt="Gallery Image" className= {styles.image}/>
        <img src={I1} alt="Gallery Image" className= {styles.image2}/>
        <img src={I2} alt="Gallery Image" className= {styles.image3}/>
        <img src={I3} alt="Gallery Image" className= {styles.image4}/>
        <img src={I4} alt="Gallery Image" className= {styles.image5}/>
        <img src={I5} alt="Gallery Image" className= {styles.image6}/>
        <img src={I6} alt="Gallery Image" className= {styles.image7}/>
        <img src={I7} alt="Gallery Image" className= {styles.image8}/>
        <img src={I8} alt="Gallery Image" className= {styles.image1}/>

    </div>
</div>

    </div>
    <Services/>
    <WorkWithUs/>
    <Footer/>
    </>
  );
}

export default Gallery;