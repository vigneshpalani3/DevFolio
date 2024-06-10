import React from 'react'
import contactBg from '../images/contact_bg.jpg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "89a4634c-c86a-4f74-bf18-ad0670601c63");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    
  };

  return (
    <section id='Contact' className='mb-24 mx-auto shadow-lg shadow-indigo-900 bg-white w-full max-w-[360px] rounded-md '>
      <form onSubmit={onSubmit} className='flex flex-col items-center m-6 gap-5'>
        <h1 className='font-sora text-gray-900 after:content-[""] after:absolute text-xl after:h-[2px] after:w-full relative after:left-0 after:bottom-[-2px] self-start after:bg-blue-600 lg:text-2xl'>Get in touch</h1>
        <input type="text" placeholder='your name' name="name" className='shadow-sm shadow-black/80 px-3 py-2 text-md outline-none rounded-md placeholder:text-blue-600 text-black font-base tracking-wide w-full border-[1px] caret-blue-600 lg:text-lg' required/>
        <input type="email" name="email" placeholder='your email' className='px-3 py-2 w-full text-md outline-none rounded-md placeholder:text-blue-600 text-black font-base tracking-wide shadow-sm shadow-black/80 border-[1px] caret-blue-600 lg:text-lg' required/>
        <textarea name="message" placeholder='your message' className='shadow-sm shadow-black/80 px-3 h-28 py-2 text-md outline-none rounded-md placeholder:text-blue-600 text-black font-base tracking-wide border-[1px] caret-blue-600 w-full lg:text-lg' required></textarea>
        <button type="submit" className='shadow-sm shadow-black/80 py-1 bg-blue-500 text-md font-semibold rounded-md w-full text-blue-50 lg:text-lg' >Submit</button>
      </form>
    </section>
  )
}

export default Contact