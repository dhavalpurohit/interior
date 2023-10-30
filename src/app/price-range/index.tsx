export default function PriceRange() {
    return (
        <div className="filter-option">
            <div className="filter-option-header">
                <div className="filter-sub-title">Price Range</div>
            </div>
            <div className="range-value">
                <span id="start">$0</span>
                <span id="end">$100</span>
            </div>
            <div className="slider">
                <div className="progress"></div>
            </div>
            <div className="range-input">
                <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
                <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
            </div>
        </div>
    )
}