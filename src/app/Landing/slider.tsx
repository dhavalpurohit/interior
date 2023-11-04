import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Slider() {
    const swiperRef = useRef();

    const images = [
        {
            url: "slide-1.png",
            title: "High Quality Furniture",
            discription: 'Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames.',
            btn: true,
            link: '#',
            offer: null,
            class: ''

        },
        {
            url: "slide-1.png",
            title: "High Quality Furniture 2",
            discription: 'Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames.',
            btn: true,
            link: '#',
            offer: null,
            class: ''

        },
        {
            url: "slide-2.png",
            title: " Discount Up to",
            discription: 'Lorem ipsum dolor sit amet consectetur',
            btn: false,
            link: '#',
            offer: 70,
            class: 'offers'
        },
    ];

    return (
        <div className="slider">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                onBeforeInit={(swiper: any) => {
                    swiperRef.current = swiper;
                }}
                spaceBetween={30}
                slidesPerView={2}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                }}
                className='image-slider'
            >
                {images.length > 0 ? (
                    images.map((obj: any, index: any) =>
                        <SwiperSlide key={index} className={"slider-item" + ' ' + obj.class} style={{ backgroundImage: "url(" + obj.url + ")" }}>
                            <div className="slider-content">
                                <div className="slider-title">
                                    {obj.title}
                                </div>
                                {obj.offer !== null ? (
                                    <div className="offer-percent">
                                        {obj.offer}%
                                    </div>
                                ) : (
                                    <span></span>
                                )}
                                <p>
                                    {obj.discription}
                                </p>
                                {obj.btn ? (
                                    <button className="button">Explore Now</button>
                                ) : (
                                    <span></span>
                                )}

                            </div>
                        </SwiperSlide>
                    )
                ) : (
                    <div>No List</div>
                )}
            </Swiper>
            {/* <div className="slider">
                <div
                    className="image-slider"
                >
                    {images.length > 0 ? (
                        images.map((obj: any, index: any) =>
                            <div key={index} className={"slider-item" + ' ' + obj.class} style={{ backgroundImage: "url(" + obj.url + ")" }}>
                                <div className="slider-content">
                                    <div className="slider-title">
                                        {obj.title}
                                    </div>
                                    {obj.offer !== null ? (
                                        <div className="offer-percent">
                                            {obj.offer}%
                                        </div>
                                    ) : (
                                        <span></span>
                                    )}
                                    <p>
                                        {obj.discription}
                                    </p>
                                    {obj.btn ? (
                                        <button className="button">Explore Now</button>
                                    ) : (
                                        <span></span>
                                    )}

                                </div>
                            </div>
                        )
                    ) : (
                        <div>No List</div>
                    )}
                </div>
                <div className="slider-button-content">
                    <div className="slider-button prev">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.2084H21.0702" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.0349 1L21.07 11.2083L11.0349 21.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div className="slider-button next">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.2084H21.0702" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.0349 1L21.07 11.2083L11.0349 21.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div > */}
            <div className="slider-button-content">
                <div className="slider-button prev" onClick={() => swiperRef.current?.slidePrev()}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.2084H21.0702" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.0349 1L21.07 11.2083L11.0349 21.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <div className="slider-button next" onClick={() => swiperRef.current?.slideNext()}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 11.2084H21.0702" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.0349 1L21.07 11.2083L11.0349 21.4167" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>


    )
}