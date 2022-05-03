import React, { useEffect, useState } from 'react'

interface numberBoxProps {
  unit: string
  value: number
}

export const NumberBox = ({ unit, value }: numberBoxProps) => {
  return (
    <div>
      <div
        className={`flex h-16 w-16 items-center justify-center
        rounded-xl bg-gradient-to-b 
            from-[#2C2D45] to-[#34364F] md:h-40 md:w-40`}
      >
        <span className="text-2xl font-extrabold text-[#FB6087] md:text-6xl">
          {value < 10 ? '0' + value : value}
        </span>
      </div>
      <div className="mt-3">
        <h2 className="text-center text-sm font-bold uppercase text-gray-600 md:tracking-widest">
          {unit}
        </h2>
      </div>
    </div>
  )
}
