import { useState } from "react";
const Advisory = () => {
  const [message,setMessage] = useState('');
  const [formData, setFormData] = useState({
    "advNo":1,
    "advName":''
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
    fetch('http://localhost:8000/api/v1/advisory',{
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
    return (<>
      <form onSubmit={submitData}>
      <div className="flex flex-col">
        
      <label className='m-5 mb-[5px] block text-base font-medium text-dark' >
        Advisory name
      </label>
      <input
        type='text'
        id='advName'
        name='advName'
        value={formData.advName}
        onChange={handleChange}
        placeholder='enter name'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <label className='m-5 mb-[5px] block text-base font-medium text-dark'>
        Advisory No
      </label>
      <input
        type='Number'
        id='advNo'
        name='advNo'
        value={formData.advNo}
        onChange={handleChange}
        placeholder='enter no'
        className='w-[30%] m-5 mt-2 bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
      />
      <button type='submit' className="w-20 mx-5 my-2 bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5"
      >
        Add
        </button>
        
    </div>
    </form>
    <h1 className='mt-5 font-semibold text-xl'>{message}</h1>
    </>
    )
  }


export default Advisory