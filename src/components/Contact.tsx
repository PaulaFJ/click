import { useState, FormEvent } from 'react'

import { Oval } from "./ui/Oval";
import emailjs from '@emailjs/browser'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const userId = 'Vi0zNQsVm01K8SFf1' 
  const templateId = 'template_xam89jd'
  const serviceId = 'service_z35786q'

  async function sendEmail(e: FormEvent) {
    e.preventDefault()

    let templateParams = {
      from_name: name,
      message: email + '--' + subject + '---' + phone
    } 

    await emailjs.send(    
      serviceId,
      templateId,
      templateParams,
      userId  
    ).then((res: any) => { 
      setName('')
      setEmail('')
      setPhone('')
      setSubject('')
      alert('Email enviado com sucesso!')
    }, (error: any) => {
      console.log(error)
      alert('Ocorreu um erro, tente novamente!')
    })

  }

  return (
    <section id="contato" className="relative w-screen h-full lg:h-auto bg-[#fcfcff] overflow-hidden -mt-48 pt-64 pb-24 mx-0 md:mx-auto" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-quad">
      <div className="lg:pt-24 m-auto w-full px-6 lg:px-40 lg:flex items-center align-middle  md:justify-center lg:justify-around">
        <div className="flex-1 text-[#25234d] text-start md:text-center lg:text-start">
          <span className="text-[#6422db] text-[1.2rem] pb-14 leading-normal">CONTATO</span>
          <h1 className="text-5xl mb-8 mt-4 leading-none font-bold">Potencialize <br /> suas vendas!</h1>

          <p className="text-base opacity-[81%] font-semibold">Em nossa empresa você encontra toda as melhores soluções que você <br />
            precisa para sua loja estar online. Tudo isso de forma fácil, <br />
            descomplicada e intuitiva.</p>
        </div> 

        <div className="flex-1 text-center items-center lg:mt-0 mt-16 px-0 md:px-24">
          <div  className="bg-white rounded-lg flex flex-col text-start py-8 px-12 lg:w-4/5 shadow-xl">
            <form className="w-full" onSubmit={sendEmail}>
              <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className="w-full mb-4 rounded border-zinc-400 placeholder:text-md placeholder-slate-400" placeholder="Nome"/>  
              <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} className="w-full mb-4 rounded border-zinc-400 placeholder:text-md placeholder-slate-400" placeholder="Email"/>  
              <input type="tel" value={phone} onChange={(e) => {setPhone(e.target.value)}} className="w-full mb-4 rounded border-zinc-400 placeholder:text-md placeholder-slate-400" placeholder="Telefone"/>  
              <textarea value={subject} onChange={(e) => {setSubject(e.target.value)}} className="w-full mb-4 rounded border-zinc-400 placeholder:text-md placeholder-slate-400 resize-none h-32" placeholder="Mensagem" />  
              <button type="submit" className="bg-[#514756] w-48 h-12 py-3 px-8 rounded-[35px] text-white text-base leading-normal align-middle hover:bg-[#514770] ml-auto">ENVIAR</button>
            </form>
          </div>   

          <Oval />     
        </div>
      </div>
    </section>
  )
}