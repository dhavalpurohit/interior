import { useState } from 'react'

export default function FilterOption(item: any) {
    const [open, setOpen] = useState(true);

    const toggleClass = () => {
        setOpen(!open);
    }

    return (
        <div className="filter-option">
            <div className="filter-option-header">
                <div className="filter-sub-title">{item.items.title}</div>
                <div className="collapse-icon" onClick={toggleClass}>
                    <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M18.9044 10L10.0572 1L1.20991 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>

            <ul className={"collapse" + (open ? ' in' : '')}>
                {item.items.list.length > 0 ? (
                    item.items.list.map((obj: any, index: any) =>
                        <li key={index}>
                            <input type="checkbox" id={obj.value} />
                            <label htmlFor={obj.value}>{obj.name}</label>
                        </li>
                    )
                ) : (
                    <div>No List</div>
                )}
            </ul>
        </div>
    )
}