import m1p1 from '../assets/Mod1/Image.png';
import m1p2 from '../assets/Mod1/Image-1.png';
import m1p3 from '../assets/Mod1/Image-2.png';

import m2p1 from '../assets/Mod2/Image.png';
import m2p2 from '../assets/Mod2/Image-1.png';
import m2p3 from '../assets/Mod2/Image-2.png';

import m3p1 from '../assets/Mod3/Image.png';
import m3p2 from '../assets/Mod3/Image-1.png';
import m3p3 from '../assets/Mod3/Image-2.png';

import styles from '../Styles/Services.module.css';

function Services() {
    return (
        <>
            <section>
                <div className={styles.servicesContent}>
                    <div className={styles.sectionHeader}>
                        Services
                    </div>

                    <div className={styles.module1}>
                        <div>
                            <p className="heading1"> FLORAL INSTALLATIONS </p>
                            <p className="paragraph1"> We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events. </p>
                        </div>
                        <picture>
                            <source media="(min-width:1200px)" srcSet={m1p1} />
                            <source media="(min-width:800px)" srcSet={m1p2} />
                            <img src={m1p3} alt="Person making Bouquette" />
                        </picture>
                    </div> 
                    
                    <hr className="divider" />
                    <div className={styles.module2}>
                        <div>
                            <p className="heading1"> NATIVE PLANT ARRANGEMENTS </p>
                            <p className="paragraph1"> Our selection of locally sourced flora brings natural resilience and effortless elegance to your home. </p>
                        </div>
                        <picture>
                            <source media="(min-width:1200px)" srcSet={m2p1} />
                            <source media="(min-width:800px)" srcSet={m2p2} />
                            <img src={m2p3} alt="Person making Bouquette" />
                        </picture>
                    </div> 
                    <hr className="divider" />

                    <div className={styles.module3}>
                        <div>
                            <p className="heading1"> CUSTOM FLORAL CONCEPTS </p>
                            <p className="paragraph1"> Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. </p>
                        </div>
                        <picture>
                            <source media="(min-width:1200px)" srcSet={m3p1} />
                            <source media="(min-width:800px)" srcSet={m3p2} />
                            <img src={m3p3} alt="Pink tulips" />
                        </picture>
                    </div> 
                    <hr className="divider" />
                </div>
            </section>
        </>
    );
}

export default Services;