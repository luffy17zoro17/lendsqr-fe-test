import IconProp from "./IconProp";



const FourRectProp = ({icon,title,numbers,icoclassN}) =>{
    return (
       <div className="shadow-lg px-5
        py-4 w-[13rem] xl:w-[18rem] xl:h-[11rem]">
          <IconProp
            icon={icon}
            icoclassN={icoclassN}
          />
          <h1 className="text-sm pt-4 pb-2">{title}</h1>
          <span className="font-bold text-2xl">{numbers}</span>
       </div> 
    );
}

export default FourRectProp;