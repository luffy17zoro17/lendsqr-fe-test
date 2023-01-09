
import Image from "next/image";


const ImageIcon =({isrc,iclassN,iht,iwd,alt})=>{
    return (
      <div>
        <Image
          src={isrc}
          className={iclassN}
          height={iht}
          width={iwd}
          alt={alt}
        />
      </div>  
    );
}

export default ImageIcon;