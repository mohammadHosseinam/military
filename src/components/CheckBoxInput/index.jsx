import React from 'react';

function ChecxboxInput({ text, id, value, onChange }) {
    return (
        <div className="flex items-center h-full">
            <div className="flex items-center h-5">
                <input
                    id={id}
                    type="checkbox"
                    checked={value} // مقدار `checked` را از `value` می‌گیرد
                    onChange={onChange} // تابع تغییر مقدار را به `onChange` متصل می‌کند
                    className="w-5 h-5 border rounded-lg border-neutral-500 focus:ring-3 focus:ring-info/50"
                />
            </div>
            <label htmlFor={id} className="ms-2 text-sm font-medium text-neutral-800">
                {text}
            </label>
        </div>
    );
}

export default ChecxboxInput;