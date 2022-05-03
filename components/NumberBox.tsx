import React, { useEffect, useState } from 'react'

interface numberBoxProps {
  unit: string
  value: number
}

export const NumberBox = ({ unit, value }: numberBoxProps) => {
  return (
    <div>
      <div
        className={`flex h-40 w-40 items-center justify-center 
            rounded-xl bg-gradient-to-b from-[#2C2D45] to-[#34364F]`}
      >
        <span className="text-6xl font-extrabold text-[#FB6087]">
          {value < 10 ? '0' + value : value}
        </span>
      </div>
      <div className="mt-3">
        <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-600">
          {unit}
        </h2>
      </div>
    </div>
  )
}
