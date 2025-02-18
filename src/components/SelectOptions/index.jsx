import { useEffect, useState } from "react";
import DownArowwIcon from "../../assets/icons/downAroww";

function SelectOptions({ options = ["item 1", "item 2", "item 3"], selectedOption="", title = "تستی", width = "", className, onChange }) {
    const [value, setValue] = useState(selectedOption);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        setValue(selectedOption);
    }, [selectedOption]); // همگام‌سازی مقدار داخلی با Redux

    const handleSelectChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        setIsFocused(false);
        if (onChange) onChange(newValue); // مقدار جدید رو به کامپوننت والد ارسال کن
    };

    return (
        <div style={{ width: width || "100%" }} className={`relative h-12 ${className}`}>
            <select
                id="selectInput"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleSelectChange}
                required
                className="border border-neutral-300 rounded-lg text-neutral-700 px-4 py-2 w-full text-base font-normal appearance-none focus:outline-none focus:border-info-400"
            >
                <option value="" disabled hidden></option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <label
                htmlFor="selectInput"
                className={`absolute right-4 bg-white px-1 text-neutral-500 text-sm transition-all duration-200 
                    transform pointer-events-none ${
                        value || isFocused ? '-top-2 text-xs' : 'top-2 text-base font-normal text-neutral-700'
                    }`}
            >
                {title}
            </label>
            <div
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-transform duration-200 ${
                    isFocused ? 'rotate-180' : 'rotate-0'
                }`}
            >
               <DownArowwIcon />
            </div>
        </div>
    );
}

export default SelectOptions;