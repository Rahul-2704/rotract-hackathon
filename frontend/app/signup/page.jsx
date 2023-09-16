'use client'
import {useEffect, useState} from "react"
import { useRouter } from "next/navigation"
import Web3 from 'web3'
const SignIn = () => {
  const router=useRouter();
  const [fullName,setFullName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [showDropdown, setShowDropdown] = useState(false);
  const [role, setRole] = useState('');
  const [address , setAddress] = useState("")
  const web3 = new Web3(window.ethereum);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  useEffect(() => {

    async function func()
    {
      await window.ethereum.enable()
      const accounts = await web3.eth.getAccounts();
      const userAddress = accounts[0];
      setAddress(userAddress)
    }
    func()
  } , [])
  async function handleSubmit(e){
    e.preventDefault()
    if(!fullName||!email||!password||!address||!role){
      return;
    }
    try {
      console.log(address)
      const res=await fetch('/api/signup',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          fullName,email,password,role,address
        })
      }
      )
      if(res.ok){
        router.push('/')
        const form=e.target
        form.reset();
      
      }else{
        console.log("User Registration failed.")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign up
        </h2>
        <p class="mt-2 text-base text-gray-600">
          Already have an account?{" "}
          <a
            href="/signin"
            title=""
            class="font-medium text-black transition-all duration-200 hover:underline"
          >
            Sign In
          </a>
        </p>
        <form onSubmit={handleSubmit} class="mt-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" class="text-base font-medium text-gray-900">
                {" "}
                Full Name{" "}
              </label>
              <div class="mt-2">
                <input
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                />
              </div>
            </div>
            <div>
              <label for="email" class="text-base font-medium text-gray-900">
                {" "}
                Email address{" "}
              </label>
              <div class="mt-2">
                <input
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  {" "}
                  Password{" "}
                </label>
                {/* Add a button to toggle the dropdown */}

              </div>
              <div className="mt-2">
                <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    id="password"
                />
              </div>
            </div>
            <div><button
                type="button"
                onClick={toggleDropdown}
                className="text-base font-medium text-gray-900 focus:outline-none"
            >
              Select Role
            </button>
            {showDropdown && (
                <div className="mt-2">
                  <select
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      id="dropdown"
                      value={role} 
                      onChange={(e)=>setRole(e.target.value)}
                  >
                    <option value="Producer" >Producer</option>
                    <option value="Transporter" >Transporter</option>
                    <option value="Distributor">Distributor</option>
                  </select>
                </div>
            )}
            </div>
           
            <div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Create Account{" "}
  
              </button>
            </div>
          </div>
        </form>
  </div>
  </div>
</div>
</section>

  )
}

export default SignIn