


const SidebarProp = ({icon,title,sclassN,icoclassN,tclassN,udicon,id,udtitle, udclassN}) => {

  
    return (
      <div>
      <div className={sclassN}>
        <div className={icoclassN}>{icon}</div>
        <h1 className={tclassN}>{title}</h1>
      </div> 
      <div> 
      {id===26 && (
      <div className={`${sclassN} ${udclassN}`}>  
      <div className={icoclassN}>{udicon}</div>
      <h1 className={tclassN}>{udtitle}</h1>
      </div>
      )}
      </div>
      </div>
    );
}

export default SidebarProp