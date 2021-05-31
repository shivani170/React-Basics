import React, { useState, useEffect } from 'react';

// const Container = styled.div`
//     dispaly: flex;
//     flex-direction:row
// `

export const SearchBox = ( {requestSearch} ) => {
    const [query, setQuery] = useState("");

    const updateQuery = (e) => {
        setQuery(e.target.value)
    }

    const searchClick = () => {
        if (query) {
            requestSearch(query)
        }
    }

    return (<div>
        <input
            type="search"
            placeholder="Search..."
            name="search"
            value={query}
            onChange={updateQuery} />
        <button onClick={searchClick}>
            Click me...
       </button>
    </div>

    )
}
