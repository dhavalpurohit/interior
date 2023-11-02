import { useState } from "react";

export default function Heading() {
    const tabs = ['All Product', 'Chair', 'Table', 'Sofa', 'FootStool', 'Office']
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="item-section">
            <div className="section-title">
                <h2>Best Seller</h2>
                <a href="#">View All</a>
            </div>
            <div className="item-tab">
                <ul className="tab-list">
                    {tabs.length > 0 ? (
                        tabs.map((obj: any, index: any) =>
                            <li key={index} onClick={() => setActiveTab(index)} className={activeTab === index ? "active" : ""}>
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
    )
}