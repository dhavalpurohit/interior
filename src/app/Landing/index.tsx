import Image from 'next/image'
import Slider from './slider'
import ItemCard from '../item-card'
import Heading from '../item-card/heading'

export default function Landing() {
    return (
        <div>
            <div className='landing'>
                <div className="landing-title">
                    <h2>Special Offers</h2>
                    <Image src='/star.png' alt={'star'} width={30} height={30} />
                </div>
                <Slider />
                <Heading />
            </div>
            <div className='item-card-section'>
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </div>
        </div>
    )
}