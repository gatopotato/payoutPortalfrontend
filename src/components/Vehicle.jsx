import {useState} from 'react'

const Vehicle = () => {
  const children = ["P","D"];
  const [message,setMessage] = useState('');
  const [formData, setFormData] = useState({
    "vehicleNo":'',
    "model":'',
    "year":0,
    "fuel":'',
    "vehicleType":'',
    "cases":''
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
    fetch('http://localhost:8000/api/v1/vehicle',{
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
    <>
    <form onSubmit={submitData}>
    <div className='flex flex-col'>
      
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Vehicle No
      </label>
      <input
        type='text'
        id='vehicleNo'
        name='vehicleNo'
        value={formData.vehicleNo}
        onChange={handleChange}
        placeholder='enter vehicle no'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Model
      </label>
      <input
        type='text'
        id='model'
        name='model'
        value={formData.model}
        onChange={handleChange}
        placeholder='enter model details'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Year
      </label>
      <input
        type='Number'
        id='year'
        name='year'
        value={formData.year}
        onChange={handleChange}
        placeholder='enter year'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[10px] block text-base font-medium text-dark'>
        Fuel
      </label>
      <div className='m-5 relative z-20'>
        <select id='fuel'
        name='fuel'
        value={formData.fuel}
        onChange={handleChange} className='relative z-20 w-[30%] appearance-none rounded-lg border border-stroke  bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'>
        <option value='D' className='dark:bg-dark-2'>Diesel</option>
          <option value='P' className='dark:bg-dark-2'>Petrol</option>
          
        </select>
        <span className='absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color'></span>
      </div>
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Vehicle Type
      </label>
      <input
        type='text'
        id='vehicleType'
        name='vehicleType'
        value={formData.vehicleType}
        onChange={handleChange}
        placeholder='enter type'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Case
      </label>
      <input
        type='text'
        id='cases'
        name='cases'
        value={formData.cases}
        onChange={handleChange}
        placeholder='enter case'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <button type="submit" className="w-20 mx-5 my-2 bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      >
        Add
        </button>
        </div>
      </form>
      
    
    
    <h1 className='mt-5 font-semibold text-xl'>{message}</h1>
    </>
  )
}

export default Vehicle