import React from 'react'
import { useState } from 'react';
const Payout = () => {
  const [message,setMessage]=useState('');
  const [formData, setFormData] = useState({
    "issueDate": new Date().toISOString().split('T')[0],
    "advNo":0,
    "phoneNo":0,
    "vehicleNo":"",
    "insComp":"",
    "ncb":0,
    "policyNo":0,
    "idvVal":0,
    "premium":0,
    "reward":0
});

  // Step 3: Handle input changes
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const submitData=(e)=>{
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    fetch('http://localhost:8000/api/v1/payout',{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setMessage("Data Entered.")
      // Handle success, e.g., display a success message
    })
    .catch((error) => {
      console.error('Error:', error);
      setMessage("Error.Retry...")
      // Handle error, e.g., display an error message
    });
  }
  const exportData = ()=>{
    fetch("http://localhost:8000/api/v1/payout/export")
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'MIS.xlsx');
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode.removeChild(link);
                    setMessage("Data exported..");
    })
    .catch((error) => {
      console.error('Error:', error);
      setMessage("Error.Retry...")
      // Handle error, e.g., display an error message
    });
  }
  return (
    <div className="flex flex-col w-full">
      <form onSubmit={submitData}>
      <div className='flex w-full justify-start'>
      <div className='w-1/2 m-5'>
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Issue date
      </label>
      <input
        type='text'
        id='issueDate'
        name='issueDate'
        value={formData.issueDate}
        onChange={handleChange}
        placeholder='YYYY-MM-DD'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Advisory No
      </label>
      <input
        type='text'
        id='advNo'
        name='advNo'
        value={formData.advNo}
        onChange={handleChange}
        placeholder='enter no'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        User Contact No
      </label>
      <input
        type='Number'
        id='phoneno'
        name='phoneNo'
        value={formData.phoneNo}
        onChange={handleChange}
        placeholder='enter no'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Vehicle No
      </label>
      <input
        type='text'
        id='vehicleNo'
        name='vehicleNo'
        value={formData.vehicleNo}
        onChange={handleChange}
        placeholder='enter no'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Insurance Comapny
      </label>
      <input
        type='text'
        id='insComp'
        name='insComp'
        value={formData.insComp}
        onChange={handleChange}
        placeholder='enter name'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      </div>
      <div className='w-1/2 m-5'>
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        NCB
      </label>
      <input
        type='Number'
        id='ncb'
        name='ncb'
        value={formData.ncb}
        onChange={handleChange}
        placeholder='enter value'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Policy No
      </label>
      <input
        type='Number'
        id='policyNo'
        name='policyNo'
        value={formData.policyNo}
        onChange={handleChange}
        placeholder='enter no'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        IDV Value
      </label>
      <input
        type='text'
        id='idvVal'
        name='idvVal'
        value={formData.idvVal}
        onChange={handleChange}
        placeholder='enter value'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Premium
      </label>
      <input
        type='Number'
        id='premium'
        name='premium'
        value={formData.premium}
        onChange={handleChange}
        placeholder='enter amount'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Reward
      </label>
      <input
        type='Number'
        id='reward'
        name='reward'
        value={formData.reward}
        onChange={handleChange}
        placeholder='enter percentage'
        className='w-2/3 m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      </div>
      </div>
      
      {/* <div className='mx-5 my-2 flex justify-center'> */}
      <button type='submit' className="w-20 mx-5 my-2 bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      >
        Save
        </button>
        </form>
        <button className="w-20 mx-5 my-2 bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      onClick={exportData}>
        Export
        </button>
        
        {/* </div> */}
        
        <h1 className='mt-5 font-semibold text-xl'>{message}</h1>
    </div>
  )
}

export default Payout