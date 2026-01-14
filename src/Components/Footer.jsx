import image from '../assets/Footer/Footer.png'
import image1 from '../assets/Footer/Footer-1.png'
import image2 from '../assets/Footer/Footer-2.png'


function Footer(){
    return(
        <>
            <picture>
                <source media="(min-width: 1024px)" srcSet={image} />
                <source media="(min-width: 600px)" srcSet={image1} />
                <img src={image2} alt="Footer Image" />
            </picture>
        </>
    )
}


export default Footer;

