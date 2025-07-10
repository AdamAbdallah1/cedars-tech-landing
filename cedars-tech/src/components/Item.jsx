import React from 'react'

const Item = () => {
  return (
    <div className="gap-8 mt-10 w-full max-w-6xl px-4 flex flex-col lg:flex-row justify-around">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <div className="flex items-center justify-center mb-4">
            <SiNetflix size={40} className="text-red-600" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Netflix</h2>
        </div>
    </div>
  )
}

export default Item