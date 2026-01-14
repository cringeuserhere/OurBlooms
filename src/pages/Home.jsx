import WorkWithUs from '../Components/WorkWithUs.jsx'
import Hero from '../Components/Hero.jsx'
import Footer from '../Components/Footer.jsx'
import img1 from '../assets/carouselimages/Image-1.png'
import img2 from '../assets/carouselimages/Image-2.png'
import img3 from '../assets/carouselimages/Image-3.png'
import img4 from '../assets/carouselimages/Image-4.png'
import img5 from '../assets/carouselimages/Image-5.png'
import  styles from'../Styles/Home.module.css'
import sec1 from '../assets/section_images/Sec1.png'
import sec2 from '../assets/section_images/Sec2.png'
import sec3 from '../assets/section_images/Sec3.png'
import midsec from '../assets/mid-sec/Image.png'
import midsec1 from '../assets/mid-sec/Image-1.png'
import midsec2 from '../assets/mid-sec/Image-2.png'





function Home() {
    return(
        <>
        <div>
            <Hero />


            <div>
                <div className="who_we_are_container">
                <p className="caption1">WHO WE ARE</p>
                <p className="heading1">We're Out Blooms and we're here to help you find your floral story.</p>
                <button className="button_danger">About US</button>
               
                <div className="carousel">
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
                <img src={img4}/>
                <img src={img5}/>
                </div>


                <div className="what_we_do">
                <p className="heading1">What We Do</p>
                <p className="paragraph1">We bring a touch of that simple magic into your world.</p>
                </div>


                <hr />


                <div className={styles.section1}>
          <p className="heading1"> 1 </p>
          <img className={styles.section1_img} src={sec1} alt="Section Image" />
          <p className="heading1"> FLORAL INSTALLATIONS </p>
          <p className="paragraph1">Living art for homes, businesses, and events.</p>
          <hr/>
        </div>


        <div className={styles.section1}>
          <p className="heading1"> 2 </p>
          <img className={styles.section1_img} src={sec2} alt="Section Image" />
          <p className="heading1"> FLORAL INSTALLATIONS </p>
          <p className="paragraph1">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
          <hr/>
        </div>


        <div className={styles.section1}>
          <p className="heading1"> 3 </p>
          <img className={styles.section1_img} src={sec3} alt="Section Image" />
          <p className="heading1"> FLORAL INSTALLATIONS </p>
          <p className="paragraph1">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
          <hr/>
        </div>


        <picture>
          <source media="(min-width: 1200px)" srcSet={midsec} />
          <source media="(min-width: 800px)" srcSet={midsec1} />
          <img src={midsec2} alt="Ourblooms Logo" />
        </picture>




           
            


       <WorkWithUs/>


                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}


export default Home;