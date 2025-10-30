import React from 'react'

const BookCard = () => {
  return (
    <div className='flex gap-5 justify-center items-center flex-wrap mt-[50px] mb-[50px]'>
    <div className='border-black border-2 p-5 m-5 w-[200px] h-[300px] flex flex-col justify-center items-center rounded-[10px] bg-sky-500'>
      <img src="https://tse2.mm.bing.net/th/id/OIP.YczS_bPsO2zADBbpjbWXlwHaKX?pid=Api&P=0&h=180" alt="book image" />
      <p>Title: Pyhsics</p>
      <p>Price: 450 INR</p>
      <button>Add To Cart</button>
    </div>

    <div className='border-black border-2 p-5 m-5 w-[200px] h-[300px] flex flex-col justify-center items-center rounded-[10px] bg-sky-500'>
      <img src="https://tse2.mm.bing.net/th/id/OIP.YczS_bPsO2zADBbpjbWXlwHaKX?pid=Api&P=0&h=180" alt="book image" />
      <p>Title: Pyhsics</p>
      <p>Price: 450 INR</p>
      <button>Add To Cart</button>
    </div>

    <div className='border-black border-2 p-5 m-5 w-[200px] h-[300px] flex flex-col justify-center items-center rounded-[10px] bg-sky-500'>
      <img src="https://tse2.mm.bing.net/th/id/OIP.YczS_bPsO2zADBbpjbWXlwHaKX?pid=Api&P=0&h=180" alt="book image" />
      <p>Title: Pyhsics</p>
      <p>Price: 450 INR</p>
      <button>Add To Cart</button>
    </div>
    </div>
  )
}

export default BookCard
