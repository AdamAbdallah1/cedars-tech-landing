import React from 'react'


const Item = ({ title, imgUrl, imgWidth }) => {
  return (
    <div className={`gap-8 mt-10 w-full max-w-6xl px-4 flex flex-col lg:flex-col justify-around`}>
        <div className={`h-30 flex flex-col justify-center items-center p-2 rounded-lg shadow hover:shadow-lg border-4 border-neutral-800`}>
          <div className="flex items-center justify-center mb-4">
            <img width={imgWidth} src={imgUrl} alt={title} />
          </div>
        </div>
    </div>
  )
}

export default Item