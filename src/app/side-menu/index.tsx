import Image from 'next/image'
import FilterOption from '../filter-options'
import PriceRange from '../price-range'
const filterList = [
    {
        store: {
            title: 'Store',
            list: [
                { id: 1, name: "HTML", value: 'ikea' },
                { id: 2, name: "Americon Signature", value: 'americonsign' },
                { id: 4, name: "iFurnholic", value: 'ifurnholic' },
                { id: 5, name: "informa", value: 'informa' },
                { id: 6, name: "Dove’s Furniture", value: 'doves' },
                { id: 7, name: "HTML", value: 'ikea1' },
                { id: 8, name: "Americon Signature", value: 'americonsign1' },
                { id: 9, name: "iFurnholic", value: 'ifurnholic1' },
                { id: 10, name: "informa", value: 'informa1' },
                { id: 11, name: "Dove’s Furniture", value: 'doves1' },
            ]
        },
        product: {
            title: 'Product',
            list: [
                { id: 12, name: "HTML", value: 'ikea12' },
                { id: 13, name: "Americon Signature", value: 'americonsign12' },
                { id: 14, name: "iFurnholic", value: 'ifurnholic21' },
                { id: 15, name: "informa", value: 'informa12' },
                { id: 16, name: "Dove’s Furniture", value: 'doves12' },
                { id: 17, name: "HTML", value: 'ikea12' },
                { id: 18, name: "Americon Signature", value: 'americonsign12' },
                { id: 19, name: "iFurnholic", value: 'ifurnholic12' },
                { id: 20, name: "informa", value: 'informa12' },
                { id: 21, name: "Dove’s Furniture", value: 'doves12' },
            ]
        }
    },
]
export default function SideMenu() {
    return (
        <div>
            <div className="sidebar-header">
                <h1>Interiour</h1>
            </div>
            <div className="filter-section">
                <div className='filter-top'>
                    <div className="filter-title">
                        <Image src="/filter-icon.png" alt="filter-icon" width={30} height={15} />
                        <span>Filter</span>
                    </div>
                    <a href='#'>
                        Reset Filter
                    </a>
                </div>
                <FilterOption items={filterList[0].store} />
                <hr className='center-border' />
                <FilterOption items={filterList[0].product} />
                <hr className='center-border' />
                <PriceRange />
            </div>

        </div>
    )
}