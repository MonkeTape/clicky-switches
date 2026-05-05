import Image from "next/image";
import Draggable from "react-draggable";
import {useRef} from 'react';

function DesktopIcon({ imageSrc, alt, name }) {
  const nodeRef = useRef(null);  
  // have a default image thing to use as the image if we don't get one
  const source = imageSrc ? imageSrc : "/default_icon.png";
  const altMessage = alt || `Icon for ${name}`;

  const image = <Image src={source} width={50} height={50} alt={altMessage} />;
  return (
    <Draggable nodeRef = {nodeRef}>
    <div ref = {nodeRef} className="flex flex-col items-center justify-center text-black w-[50px] h-[75px]">
      <div className="bg-computer-green-500">{image}</div>
      <div className="bg-computer-green-500 text-ellipsis">
        {name || "name"}
      </div>
    </div>
    </Draggable>
  );
}

export default DesktopIcon;
