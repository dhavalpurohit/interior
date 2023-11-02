import Image from 'next/image'

export default function ItemCard(items: any) {
    return (
        <div className="card">
            <Image className="card-image" src={items.items.image} alt={'chair'} width={100} height={100} />
            <div className='card-content'>
                <div className='brand-name'>{items.items.brand_name}</div>
                <div className='card-item-name'>
                    <div>{items.items.item_name}</div>
                    <span>...</span>
                </div>
                <div className='rating'>
                    {[...Array(5)].map(() => {
                        return <Image src='/rate.png' alt={'rate'} width={16} height={16} />
                    })}

                </div>
                <div className='price-cart'>
                    <div className='price-cart-value'>${items.items.price}</div>
                    <div className='shopping-bag'>
                        <Image src='/shopping-bag.svg' alt={'shopping-bag'} width={18} height={18} />
                    </div>
                </div>
            </div>
        </div>
    )
}