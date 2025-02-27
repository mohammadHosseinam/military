import React from 'react'

function SearchIcon({className}) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={className} d="M22 19H2C1.45 19 1 19.45 1 20C1 20.55 1.45 21 2 21H22C22.55 21 23 20.55 23 20C23 19.45 22.55 19 22 19Z" fill="black" />
            <path className={className} d="M4 18H20C21.1 18 21.99 17.1 21.99 16L22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V16C2 17.1 2.9 18 4 18ZM8.59 8.05C9.87 6.18 12.45 6 13.97 7.53C15.15 8.71 15.31 10.53 14.44 11.89L16 13.44C16.29 13.73 16.29 14.21 16 14.5C15.71 14.79 15.23 14.79 14.94 14.5L13.39 12.95C11.82 13.95 9.63 13.59 8.52 11.84C7.79 10.7 7.83 9.17 8.59 8.05Z" fill="black" />
            <path className={className} d="M11.5 12C12.6046 12 13.5 11.1046 13.5 10C13.5 8.89543 12.6046 8 11.5 8C10.3954 8 9.5 8.89543 9.5 10C9.5 11.1046 10.3954 12 11.5 12Z" fill="black" />
        </svg>
    )
}

export default SearchIcon