export default function Slider() {
    return (
        <div className="slider">
            <div className="image-slider">
                <div className="slider-item" style={{ backgroundImage: `url("slide-1.png")` }}>
                    <div className="slider-content">
                        <div className="slider-title">
                            High Quality Furniture
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Aenean lacus turpis vitae nisl pharetra a nibh sit fames.
                        </p>
                        <button className="button">Explore Now</button>
                    </div>
                </div>
                <div className="slider-item offers" style={{ backgroundImage: `url("slide-2.png")` }}>
                    <div className="slider-content">
                        <div className="slider-title">
                            Discount Up to
                        </div>
                        <div className="offer-percent">
                            70%
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
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
        </div>
    )
}