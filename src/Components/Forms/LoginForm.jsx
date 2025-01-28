import { useState } from "react"

export const LoginForm = () => {

  const [formData,setFormData]=useState({email:'',password:''});
  const changeFormData=(e,key)=>{
    setFormData({...formData,[key]:e.target.value})
  }
  return (
    <div className="py-16 flex justify-center ">
      <section className="bg-white  p-6 shadow-2xl w-full md:w-2/5 lg:max-w-96  ">
        <section>
          <section className="heading dark my-3 font-bold h3">Login</section>
          <span className="error text-sm">username or email adress</span>
          <input onChange={(e)=>changeFormData(e,'email')} type="text" placeholder="email" className="w-full my-3 focus:outline-none border-b border-gray-300" />
          <span className="error text-sm">password</span>
          <input onChange={(e)=>changeFormData(e,'password')} type="text" placeholder="Password" className="w-full my-3 focus:outline-none border-b border-gray-300" />
          <section className="flex justify-between my-3">
            <section><input type="checkbox" /><span className="light text-sm">Remeber Me</span></section>
            <section className=" underline cursor-pointer">Lost your password?</section>
          </section>

          <button className="w-full common-btn my-3 cursor-pointer">Login</button>
        </section>
      </section>
    </div>
  )
}
