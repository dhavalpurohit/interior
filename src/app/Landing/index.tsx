import Image from 'next/image';
import { useState } from "react";
import ItemCard from "../item-card";
import Slider from './slider';

import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const tabs = ['All Product', 'Chair', 'Table', 'Sofa', 'FootStool', 'Office']
const cartList =
{
    data: [
        { id: 1, category: 'Chair', brand_name: "IKEA", item_name: 'Muren Armchairs 1', price: 120, image: '/chair.png' },
        { id: 2, category: 'Table', brand_name: "IKEA", item_name: 'Muren Armchairs 2', price: 130, image: '/chair2.png' },
        { id: 3, category: 'Office', brand_name: "IKEA", item_name: 'Muren Armchairs 3', price: 140, image: '/chair.png' },
        { id: 4, category: 'Sofa', brand_name: "IKEA", item_name: 'Muren Armchairs 4', price: 150, image: '/chair2.png' },
        { id: 5, category: 'FootStool', brand_name: "IKEA", item_name: 'Muren Armchairs 5', price: 160, image: '/chair.png' },
    ]
}

export default function Landing() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeCate, setCat] = useState('All Product');
    console.log("activeCate", activeCate)
    return (
        <div>
            <div className='landing'>
                <div className="section-title">
                    <h2>Special Offers</h2>
                    <Image src='/star.png' alt={'star'} width={30} height={30} />
                </div>
                <Slider />
                <div className="item-section">
                    <div className="section-title">
                        <h2>Best Seller</h2>
                        <a href="#">View All</a>
                    </div>
                    <div className="item-tab">
                        <ul className="tab-list">
                            {tabs.length > 0 ? (
                                tabs.map((obj: any, index: any) =>
                                    <li key={index} onClick={() => [setActiveTab(index), setCat(obj)]} className={activeTab === index ? "active" : ""}>
                                        {obj}
                                    </li>
                                )
                            ) : (
                                <div>No List</div>
                            )}
                        </ul>
                        <div className="sort-by">
                            <span>Sort by</span>
                            <div className="select-dropdown">
                                <select>
                                    <option value="low">Low-High</option>"
                                    <option value="high">High-Low</option>
                                    <option value="new">New First</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                    1900: {
                        slidesPerView: 5,
                    },
                }}
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay]}
                className='item-card-section'>
                {cartList.data.length > 0 ? (
                    cartList.data.map((obj: any, index: any) => {
                        if (activeCate === 'All Product' || activeCate === obj.category)
                            return <SwiperSlide key={index}><ItemCard key={index} items={obj} /></SwiperSlide>
                    }
                    )
                ) : (
                    <div>No Item</div>
                )}

            </Swiper>
        </div>
    )
}