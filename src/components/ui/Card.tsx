interface CardProps {
  title: string,
  icon: string,
  text: string,
  color: string
}

export function Card({title, icon, text, color}: CardProps) {
  return (
    <div className="w-full lg:h-[21rem] bg-white shadow-box-card my-4 lg:my-0 py-5 lg:py-10 px-4 text-[#0e2c47] rounded-lg relative lg:first-of-type:mt-32 lg:even:mt-16 lg:last-of-type:-mt-16">
      <img src={icon} width="80px" height="80px" className="mx-auto lg:mx-0"/>
      <div className="w-8 h-8 absolute rounded-full lg:left-16 lg:top-24 top-20 left-44 md:left-40 opacity-[0.8] content-none " style={{backgroundColor: color}}></div>

      <h1 className="text-[1.2rem] my-[1.5rem] opacity-[79%]">{title}</h1>
      <p className="opacity-[81%] text-base font-light">{text}</p>
    </div>
  )
}