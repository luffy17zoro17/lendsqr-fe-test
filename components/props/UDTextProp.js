


const UDTextProp = ({title,content,tclassN,cclassN}) => {
    return (
      <div>
        <h1 className={tclassN}>{title}</h1>
        <span className={cclassN}>{content}</span>
      </div>  
    );
}

export default UDTextProp;