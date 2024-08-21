import react from 'react'
import'./Hero.css'
import hand_icon from '../Assets/hand_icon.jfif'
import hero_image from '../Assets/hero_image.png'

const Hero=()=>{
    return(
        <div className='hero'>
            <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
                <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    {/* <img src={hand_icon} alt=''></img> */}
                
                <p>collections</p>
                <p>for everyone</p>
                </div>
            </div>
            <div className='hero-letest-btn'>
                <div>Latest collection</div>
                {/* <img src={arrow_icon} alt=' '></img> */}
            </div>
        </div>

             <div className='hero-right'>
                 <img className='hero_img' src={hero_image} alt=' '></img>
            </div>

        </div>
    )
}
export default Hero