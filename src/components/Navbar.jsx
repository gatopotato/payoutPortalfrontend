import logo from "../assets/logo.png"
import { useState,useEffect } from "react";

const Navbar = () => {
  const [noPolicies, setNoPolicies] = useState(0);

  const updateNum = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/payout/number");
      const data = await response.json();
      setNoPolicies(data.data.noOfPolicies);
    } catch (error) {
      console.error('Error fetching number of policies:', error);
    }
  };

  useEffect(() => {
    // Initial fetch
    updateNum();

    // Set up the interval to fetch data every 2 seconds
    const intervalId = setInterval(updateNum, 2000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between py-5 mb-2 border-b-2 border-slate-400 px-20">
      <img src={logo} alt="logo" className="h-20"/>
      <h1 className='mt-5 font-semibold text-xl'>No of policies this month: {noPolicies}</h1>
      <div className="flex p-1 m-1">
        <a className="p-2 hover:font-medium cursor-pointer" href="/advisory">Advisory</a>
        <a className="p-2 hover:font-medium cursor-pointer" href="/vehicle">Vehicle</a>
        <a className="p-2 hover:font-medium cursor-pointer" href="/user">User</a>
        <a className="p-2 hover:font-medium cursor-pointer" href="/payout">Payout</a>
      </div>
    </div>
  )
}

export default Navbar