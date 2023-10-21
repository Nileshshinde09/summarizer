import React from 'react'
import { MdDelete } from 'react-icons/md';

const history = () => {
  return (
    <div className='px-2 mt-2 shadow-2xl shadow-black mx-auto w-3/4 max-md:w-screen bg-white h-screen  overflow-scroll no-scrollbar'>
      <div>
        <h1 className='font-semibold md:text-3xl text-xl text-center'>History</h1>
      <button onClick={()=>alert("deleted")} className='m-5 md:text-4xl text-red-500 text-2xl'><MdDelete/></button>
      </div>

      <div className='flex space-x-2 bg-red-100 rounded-lg p-1 mt-1'>
      <h1 className='text-xl font-bold'>Q:</h1>
      <h3 className='text-lg font-semibold'>If you could live anywhere, where would it be?</h3>
      </div>
      <div className='flex bg-green-100 rounded-lg p-1 mt-1'>
      <h1 className='text-xl font-bold'>A:</h1>
      <p className='mx-4'>
      I'm sorry, but the provided search results do not contain relevant information to answer the question. It seems that the question itself, "dummy answers," doesn't provide specific context or information to generate a meaningful response.
      </p>
      <hr/>
      </div>
        
    </div>
  )
}

export default history
