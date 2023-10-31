import Image from 'next/image'

export default function Landing() {
    return (
        <div className="card">
            <Image className="card-image" src='/chair.png' alt={'chair'} width={100} height={100} />
            <div className='card-content'>
                <div className='brand-name'>IKEA</div>
                <div className='card-item-name'>
                    <div>Muren Armchairs</div>
                    <span>...</span>
                </div>
                <div className='rating'>
                    {[...Array(5)].map(() => {
                        return <Image src='/rate.png' alt={'rate'} width={16} height={16} />
                    })}

                </div>
                <div className='price-cart'>
                    <div className='price-cart-value'>$210.00</div>
                    <div className='shopping-bag'>
                        <Image src='/shopping-bag.svg' alt={'shopping-bag'} width={18} height={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}