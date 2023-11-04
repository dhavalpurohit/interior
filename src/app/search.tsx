import { useState } from "react";

const data = [
    {
        id: 1,
        item_name: 'abc'
    },
    {
        id: 2,
        item_name: 'sofa'
    },
    {
        id: 3,
        item_name: 'table'
    },
    {
        id: 3,
        item_name: 'chair'
    }
]
export default function Search() {
    const [query, setQuery] = useState("")

    return (
        <div className="search">
            <img src="/search.svg" alt="search" />
            <input type="text" placeholder="Search For Products . . ." onChange={event => setQuery(event.target.value)} />
            <div className='suggestion_box' style={query === '' ? { display: 'none' } : { display: 'block' }}>
                {
                    data.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.item_name.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <span key={index}>
                            {post.item_name}
                        </span>
                    ))
                }
            </div>
        </div >
    )
}