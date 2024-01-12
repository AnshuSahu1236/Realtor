import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { db } from '../firebase';

 
const Contact = ({userRef,listing}) => {

  const [landlord,setLandlord] = useState(null);
  const [message ,setMessage] = useState("");

  useEffect(()=>{

    async function getLandlord(){

      const docRef = doc(db,"users",userRef);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){

        setLandlord(docSnap.data());
      }
      else{
        
        toast.error("Could not get landlord data");
      }
    }

    getLandlord();
  },[userRef]);

  function onChange(e){

    setMessage(e.target.value);

  }

  return(
      <>
      {landlord!==null &&(

                <div className='flex flex-col w-full mt-6'>
                    <p className='mt-6 '>Contact {landlord.name} for 
                    the {listing.name.toLowerCase()}
                    </p>

                    <div className='mt-3 mb-6'>

                      <textarea name='message'
                      id='message'
                      rows="2"
                      value={message}
                      onChange={onChange}
                      className='w-full px-4 py-2 text-xl text-gray-700
                      border border-gray-300 rounded transition 
                      ease-in-out duration-200 focus:bg-white
                       focus:text-gray-700 focus:border-slate-600'
                      ></textarea>

                  </div>

                  <a href={`mailto:${landlord.email}?Subject=${listing.name} &body=${message}`}>

                    <button className="py-3 bg-blue-600 text-white rounded 
                    text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg
                     focus:bg-blue-700 focus:shadow-lg active:bg-blue-700 active:shadow-lg  transition
                     duration-150 ease-in-out w-full text-center mb-6" 
                    type='button'>
                      Send Message</button>
                  </a>
                   

                </div>

              
      ) }
      </>    
  )  
}

export default Contact
