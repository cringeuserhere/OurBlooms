import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import styles from "../Styles/About.module.css";
import lady from "../assets/About/lady.png";
import lady1 from "../assets/About/lady-1.png";
import lady2 from "../assets/About/lady-2.png";


import a1 from "../assets/About/Image 01.png";
import a2 from "../assets/About/Image 01-1.png";
import a3 from "../assets/About/Image 01-2.png";


import b1 from "../assets/About/Image 02.png";
import b2 from "../assets/About/Image 02-1.png";
import b3 from "../assets/About/Image 02-2.png";


import c1 from "../assets/About/Image 03.png";
import c2 from "../assets/About/Image 03-1.png";
import c3 from "../assets/About/Image 03-2.png";


import ib1 from "../assets/About/Image breaker.png";
import ib2 from "../assets/About/Image breaker-1.png";
import ib3 from "../assets/About/Image breaker-2.png";






function About(){


    return(
        <>  
            <div className={styles.head}>
            <p className="heading1"> ABOUT</p>
            </div>


            <div className={styles.container}>


                <div className={styles.cap}>
                    <p className="caption1"> OUR STORY </p>
                </div>


                <div className={styles.rightColumnContainer}>
                    <div className={styles.AuthorInformation}>


                        <picture>
                            <source media="(min-width:1200px)" srcSet ={lady}/>
                            <source media="(min-width:800px)" srcSet ={lady1}/>
                            <img src={lady2} alt="Author" className={styles.authorImage}/>
                        </picture>
                        <div className={styles.authorDetails}>
                            <p className="caption2"> Lily smith</p>
                            <p className="paragraph1"> Owner </p>
                        </div>


                    </div>


                    <div className={styles.founded}>
                    <p className="heading2">Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</p>
                </div>


                <div className={styles.upImage}>
                    <picture>
                        <source media="(min-width:1200px)" srcSet ={a1}/>
                        <source media="(min-width:800px)" srcSet ={a2}/>
                        <img src={a3} alt="About Us" className={styles.aboutImage}/>
                    </picture>


                    <picture>
                        <source media="(min-width:1200px)" srcSet ={b1}/>
                        <source media="(min-width:800px)" srcSet ={b2}/>
                        <img src={b3} alt="About Us" className={styles.aboutImage}/>
                    </picture>


                    <picture>
                        <source media="(min-width:1200px)" srcSet ={c1}/>
                        <source media="(min-width:800px)" srcSet ={c2}/>
                        <img src={c3} alt="About Us" className={styles.aboutImage}/>
                    </picture>


                </div>
                <div className={styles.journey}>
                    <p className="paragraph2">Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil. Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
                </div>


                <picture>
                    <source media="(min-width:1200px)" srcSet ={ib1}/>
                    <source media="(min-width:800px)" srcSet ={ib2}/>
                    <img src={ib3} alt="About Us" className={styles.imageBreaker}/>
                </picture>


                <p className="paragraph2">From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality. Discover how we can add a touch of natural beauty to your next event.</p>
                <p className='paragraph2'>Discover how we can add a touch of natural beauty to your next event.</p>
              
                <button className='button_danger'>WORK A CONSULTATION</button>
                </div>
            </div>


               
            <Footer/>
        </>
    )


}


export default About;

