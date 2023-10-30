import Image from 'next/image'
import Slider from './slider'

export default function Landing() {
    return (
        <div className='landing'>
            <div className="landing-title">
                <h2>Special Offers</h2>
                <Image src='/star.png' alt={'star'} width={30} height={30} />
            </div>
            <Slider />
        </div>
    )
}