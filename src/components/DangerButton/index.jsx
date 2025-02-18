import React from 'react'

function DangerButton({ text, icon, onClick }) {
  return (
    <button 
      className="flex items-center justify-center gap-3 h-[38px] w-full rounded-lg bg-red-100 px-3" 
      onClick={onClick}
    >
      {icon}
      <p className="font-[Vazirmatn] text-red-600">{text}</p>
    </button>
  )
}

export default DangerButton