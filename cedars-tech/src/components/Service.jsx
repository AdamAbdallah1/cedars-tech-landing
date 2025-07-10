import React from 'react'

const Service = () => {
  return (
    <>
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-4">
                <SiNetflix size={40} className="text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Netflix</h2>
            <p className="text-white mb-2 font-semibold">Prices:</p>
            <ul className="text-gray-600">
                <li>1 Month: $3</li>
                <li>3 Months: $8</li>
                <li>12 Months: $25</li>
             </ul>
        </div>
    </>
  )
}

export default Service