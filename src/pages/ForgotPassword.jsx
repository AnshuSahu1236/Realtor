import React, { useState } from 'react'
import {AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import OAuth from '../Components/OAuth';
import { toast } from 'react-toastify';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {

 
    const [email,setEmail] = useState("");

    function onChange(event){

       setEmail(event.target.value);
    }

    async function onSubmit(event){

        event.preventDefault();
        try {

            const auth = getAuth();
            await sendPasswordResetEmail(auth,email);
            toast.success('Email was sent'); 
            
        } catch (error) {

            toast.error("Could not send reset password");
            
        }


    }
  return (
    <section >
        <h1 className='text-3xl text-center mt-6 font-bold'>ForgotPassword</h1>

        <div className='flex justify-center flex-wrap items-center px-6 py-12  mx-auto '>
            {/* for login  Image  */}

            <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6 '>
                <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=773&q=80" alt="" 
                
                className='w-full rounded-2xl '/>
            </div>

            {/* for form */}
            <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
                <form  onSubmit={onSubmit}>
                   <input className='w-full px-4 py-2 text-xl text-gray-700
                    bg-white border-gray-300  rounded transition ease-in-out'
                    type="email" name="email" id="email" value={email} onChange={onChange} placeholder='Email Address'/>

                  

                    <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
                        <p className='mt-6'>Don't have a account? <Link to="/sign-up" 
                        className='text-red-600 hover:text-red-800 transition duration-200 ease-in-out ml-1'>Register</Link></p>
                        <p className='mt-6'> <Link to="/sign-in"
                        className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1'>Sign in instead</Link></p>
                    </div>

                        
                        <button className='w-full bg-blue-600 text-white px-7 py-3 font-medium
                    uppercase rounded shadow-md  hover:bg-blue-700 transition duration-200 hover:shadow-lg
                    ease-in-out mt-6 active:bg-blue-800' type='submit'> Send reset password</button>
                    
                    <div className='flex items-center my-4 before:border-t  before:flex-1  before::border-gray-300 
                    after:border-t  after:flex-1  after::border-gray-300 '>
                        <p className='text-center font-semibold mx-4'>OR</p>
                    </div>
                    <OAuth/>
                </form>

               
            </div>

        </div>
    </section>
  )
}

export default ForgotPassword



