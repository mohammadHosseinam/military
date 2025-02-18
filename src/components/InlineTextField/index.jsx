import React from 'react'
import { useState } from 'react';

function InlineTextField({ width="" , className="", required = true,  value, label, onChange }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={width?{ width}:{}} className={"relative h-12 "+className}>
            <input
                type="text"
                id="textInput"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={onChange}
                required={required}
                className={`border border-neutral-600 rounded-lg text-neutral-900 px-4 py-2 pr-4 w-full text-base font-normal  ${value || isFocused ? '' : ''
                    }`}
            />
            <label
                htmlFor="textInput"
                className={`absolute right-4 bg-white px-1 text-neutral-800 text-sm transition-all duration-200 
                    transform pointer-events-none ${value || isFocused ? '-top-2 text-xs' : 'top-2 text-base font normal text-neutral-800'
                    }`}
            >
                {label}
            </label>
        </div>
    );
}

export default InlineTextField