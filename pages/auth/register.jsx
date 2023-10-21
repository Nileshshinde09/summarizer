
import { useState } from 'react'; // Import the useState hook for form state management
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const HOSTNAME='http://127.0.0.1:5000';
const BASEURL='http://localhost:3000'
const register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ username:'',fname:'',lname:'',email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 const signup = async(data) => {
    
    try{
        const newdata=`${data.username} ${data.fname} ${data.lname} ${data.email} ${data.password}`
        console.log(newdata)
        const options = {
            method: "GET"
        }
    
        await fetch(`${HOSTNAME}/signup?input_data=${newdata}`, options)
            .then(res => res.json())
            .then((data) => {
                if(data.res==200){
                  alert("successfully Signup")
                  router.push(`${BASEURL}`)
                } 
            })
        
        
    } 
    catch (error) {
        throw new Error("Error fetching : " + error.message);
    }
    
}

  const signUp = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Basic data validation
    if (formData.username&&formData.fname&&formData.lname&&formData.email && formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
      } else {
        setError(null);
        signup(formData)
      }
    } else {
      setError('All fields are required');
    }
  };

  return (
    <section className="bg-gray-50 bg-transparent pt-20 h-[40rem] no-scrollbar overflow-y-scroll">
      <div className=" flex flex-col items-center px-6 py-1 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark-bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={signUp}>
            <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UserName</label>
                <input
                  type="username"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark:border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  minlength="8"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark-border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  minlength="8"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark-bg-gray-700 dark-border-gray-600 dark-placeholder-gray-400 dark-text-white dark-focus:ring-blue-500 dark-focus-border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark-bg-gray-700 dark-border-gray-600 dark-focus-ring-primary-600 dark-ring-offset-gray-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              {error && <p className="text-sm font-light text-red-500 dark:text-red-400">{error}</p>}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus-ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-primary-600 dark-hover-bg-primary-700 dark-focus-ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link href="/auth/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default register;
