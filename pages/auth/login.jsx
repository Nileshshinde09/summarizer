
import { useState } from 'react'; // Import the useState hook for form state management
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from "react-redux";
import {sessionstateAction,usernameAction } from '@/redux/reducer';
import Link from 'next/link';
const HOSTNAME='http://127.0.0.1:5000';
const BASEURL='http://localhost:3000'
const login = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({ username:'',fname:'',lname:'',email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState(null);
  // const[sessiondata,setSessiondata]=useState(undefined)
  // const[sessionstate,setSessionstate]=useState(false)

  // console.log(useSelector((state) => state.app.client.session.username))
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 const Login = async(data) => {
    
    try{
        const options = {
            method: "GET"
        }
        
        await fetch(`${HOSTNAME}/login?username=${data.username}&password=${data.password}`, options)
            .then(res => res.json())
            .then((data) => {
                if(data.res==1){
                  dispatch(sessionstateAction(data.username))
                  dispatch(usernameAction(true))
                  console.log(useSelector((state)=>state.app.client.sessionstate))
                  alert("successfully login")
                  router.push(`${BASEURL}`)
                
                  
                } 
                else{
                    alert('wrong credentials')
                }
            })
        
        
    } 
    catch (error) {
        throw new Error("Error fetching : " + error.message);
    }
    
}

  const logIn = async (e) => {
    e.preventDefault(); // Prevent the form from submitting

    // Basic data validation
    if (formData.username&& formData.password) {
      
        setError(null);
        Login(formData)
      
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
              Login
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={logIn}>
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
              
              
              {error && <p className="text-sm font-light text-red-500 dark:text-red-400">{error}</p>}
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      you don't have account? <Link href={"/auth/register"} class="font-medium text-primary-600 hover:underline dark:text-primary-500">register here</Link>
                  </p>
                  </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;
