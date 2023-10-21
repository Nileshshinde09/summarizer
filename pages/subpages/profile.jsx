import React from 'react';

function Profile({ user }) {
  return (
    <section class="bg-gray-50 bg-transparent pt-10">
    <div class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div class="w-full bg-white text-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <div className='grid grid-cols-2 grid-rows-3'>
                <h1 className='mt-4'>Name:</h1>
                <h1 className='mt-4'>Username:</h1>
                <h1 className='mt-4'>Register Date:</h1>
                <h1 className='mt-4'>Name:</h1>
                <h1 className='mt-4'>Username:</h1>
                <h1 className='mt-4'>Register Date:</h1>
                </div>

                <button className='bg-green-700 flex mx-auto px-6 py-2 rounded-xl w-24' onClick={()=>alert("logged out")}>Logout</button>
            </div>
        </div>
    </div>
  </section>
  );
}

// Static data
export async function getStaticProps() {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    // Add more user-specific data here
  };

  return {
    props: {
      user,
    },
  };
}

export default Profile;
