import React, { useRef, useState } from 'react';
import { getSummerize } from '@/datafetch/databaserequests';
const Summerizer = () => {
  const secondTextareaRef = useRef(null);
  const [inputValue, setInputValue] = useState(''); // Step 1: State variable for input value
  const[summerize,setSummerize]=useState(undefined)
  const copyText = () => {
    if (secondTextareaRef.current) {
      secondTextareaRef.current.select();
      document.execCommand('copy');
      alert("Text Copied");
    }
  };

  const submitForm = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if(inputValue.length<100){
      alert("Your input data is not enough to summerize!!")
      return 0
    }
    getSummerize(inputValue).then((res)=>{
      setSummerize(res)
    })
    console.log(summerize)
    
  };

  return (
    <>
      <h1 className='w-5/6 mx-auto font-bold text-center mb-3 text-6xl max-md:hidden'>Text Summerization</h1>
      <form className='flex space-x-10 max-md:hidden' onSubmit={submitForm}>
        <textarea
          placeholder='Enter text...'
          className='text-area-shadow w-1/2 h-[25rem] no-scrollbar text-2xl text-black bg-white rounded-lg border-8 border-gray-600 hover:bg-orange-100  p-5'
          value={inputValue} // Step 4: Bind input value to state
          onChange={(e) => setInputValue(e.target.value)} // Step 2: Update state on input change
        ></textarea>
        <button type='submit' className='bg-green-500 text-white p-2 rounded-lg h-20 mt-32 shadow-lg shadow-black focus:bg-green-600'> Submit</button>
        <textarea
          ref={secondTextareaRef}
          value={summerize?summerize:''}
          id="myInput"
          className='text-area-shadow w-1/2 no-scrollbar h-[25rem] bg-green-100 rounded-lg border-8 hover:bg-green-300 border-gray-700 shadow-2xl p-10'
        >
        </textarea>
        <button onClick={copyText} className='absolute right-20 mt-5 bg-blue-500 focus:bg-blue-600 text-white p-2 rounded-lg '>Copy Text</button>
      </form>
      <form className='grid grid-cols-1 space-y-4 md:hidden' onSubmit={submitForm}>
      <h1 className='w-5/6 mx-auto font-serif text-4xl text-center'>Text Summerization</h1>
        <textarea
          placeholder='Enter text...'
          className='mx-auto  text-area-shadow w-full h-[15rem] text-2xl text-black bg-white rounded-lg border-8 border-gray-600 hover:bg-orange-100 p-2'
          onChange={(e) => setInputValue(e.target.value)}>
          </textarea>
          <button type='submit' className='bg-green-500 text-white p-1 rounded-lg h-10 w-1/2 mx-auto shadow-lg shadow-black focus:bg-green-600'> Submit</button>
        <textarea
          ref={secondTextareaRef}
          value={summerize?summerize:''}
          id="myInput"
          className='mx-auto text-area-shadow w-full h-[15rem] bg-green-100 rounded-lg border-8 hover:bg-green-300 border-gray-700 shadow-2xl p-10'>
        </textarea>
          <button onClick={copyText} className='bg-blue-500 focus:bg-blue-600 text-white p-2 rounded-lg '>Copy Text</button>
      </form>
    </>
  );
};

export default Summerizer;

