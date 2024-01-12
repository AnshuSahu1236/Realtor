import React, { useEffect, useState } from 'react'
import Slider from '../Components/Slider'
import { collection, doc, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import ListingItem from '../Components/ListingItem'

const Home = () => {

  //offers

  const [offerListings,setOfferListings] = useState(null);

  useEffect(()=>{

    async function fetchListings(){

      try{

        //get reference 
        const listingRef = collection(db,"listings");

        //create the query 

        const q = query(listingRef,where("Offers","==",true),orderBy("timestamp","desc"),limit(4)); 

        //execute the query

        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc)=>{

          return listings.push({

            id:doc.id,
            data:doc.data(),
          });
        });

        setOfferListings(listings);
      //  console.log(listings);
      }
      catch(error){

        console.log(error);

      }

    }

    fetchListings();

  },[])


     
   // Places for rent
   const [rentListings, setRentListings] = useState(null);
   useEffect(() => {
     async function fetchListings() {
       try {
         // get reference
         const listingsRef = collection(db, "listings");
         // create the query
         const q = query(
           listingsRef,
           where("type", "==", "rent"),
           orderBy("timestamp", "desc"),
           limit(4)
         );
         // execute the query
         const querySnap = await getDocs(q);
         const listings = [];
         querySnap.forEach((doc) => {
           return listings.push({
             id: doc.id,
             data: doc.data(),
           });
         });
         setRentListings(listings);
       } catch (error) {
         console.log(error);
       }
     }
     fetchListings();
   }, []);

  
  //places for sale

  const [saleListings,setSaleListings] = useState(null);

  useEffect(()=>{

    async function fetchListings(){

      try{

        //get reference 
        const listingRef = collection(db,"listings");

        //create the query 

        const q = query(listingRef,where("type","==","sale"),orderBy("timestamp","desc"),limit(4)); 

        //execute the query

        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc)=>{

          return listings.push({

            id:doc.id,
            data:doc.data(),
          });
        });

        setSaleListings(listings);
      //  console.log(listings);
      }
      catch(error){

        console.log(error);

      }

    }

    fetchListings();

  },[])

  return (
    <div>
       <Slider/>
       <div className='max-w-6xl mx-auto pt-4 space-y-6'>
        {offerListings && offerListings.length > 0 && (
          <div className='m-2 mb-6'>
           <h2 className='px-3 text-2xl mt-6 font-semibold '> Recent Offers</h2>
           <Link to="/offers">
            <p className='px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Show More offers</p>
           </Link>

           <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            
            {offerListings.map((listing)=>(

            <ListingItem key={listing.id} listing={listing.data}
            id={listing.id}></ListingItem>

            ))}
           </ul>
          </div>
        )}

        
          {rentListings && rentListings.length > 0 && (
           
          <div className='m-2 mb-6'>
           <h2 className='px-3 text-2xl mt-6 font-semibold '> Places for Rent</h2>
           <Link to="/category/rent">
            <p className='px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Show More places for rent</p>
           </Link>

           <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            
            {rentListings.map((listing)=>(

            <ListingItem key={listing.id} listing={listing.data}
            id={listing.id}></ListingItem>

            ))}
           </ul>
          </div>
        )}
          {saleListings && saleListings.length > 0 && (
           
           <div className='m-2 mb-6'>
            <h2 className='px-3 text-2xl mt-6 font-semibold '> Places for Sale</h2>
            <Link to="/category/sale">
             <p className='px-3 text-sm text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out'>Show More places for Sale</p>
            </Link>
 
            <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
             
             {saleListings.map((listing)=>(
 
             <ListingItem key={listing.id} listing={listing.data}
             id={listing.id}></ListingItem>
 
             ))}
            </ul>
           </div>
         )}
       </div>
    </div>
  )
}

export default Home