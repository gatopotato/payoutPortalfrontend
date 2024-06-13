import { useState } from "react"
const User = () => {
  const [message,setMessage] = useState('');
  const [formData, setFormData] = useState({
    "name":'',
    "phoneNo":0,
    "vehicleNo":''
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
    fetch('http://localhost:8000/api/v1/user',{
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
    });}
  return (
    <form onSubmit={submitData}>
    <div className="flex flex-col">
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Name
      </label>
      <input
        type='text'
        placeholder='enter name'
        id='name'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Contact No
      </label>
      <input
        type='number'
        id='phoneNo'
        name='phoneNo'
        value={formData.phoneNo}
        onChange={handleChange}
        placeholder='phone no'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
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
        placeholder='enter veh no'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <button type='submit' className="w-20 mx-5 my-2 bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      >
        Add
        </button>
        
        <h1 className='mt-5 font-semibold text-xl'>{message}</h1>
        
    </div>
    </form>
  )
}


export default User;