"use client";
import Image from "next/image";
import Draggable from "react-draggable";
import { useRef } from "react";

function DesktopIcon({ imageSrc, alt, name, bounds = "parent" }) {
  const nodeRef = useRef(null);
  // have a default image thing to use as the image if we don't get one
  const source = imageSrc ? imageSrc : "/default_icon.png";
  const altMessage = alt || `Icon for ${name}`;

  const image = (
    <Image
      src={source}
      width={50}
      height={50}
      alt={altMessage}
      draggable={false}
    />
  );
  return (
    <Draggable nodeRef={nodeRef} bounds={bounds} grid={[75, 90]}>
      <div
        ref={nodeRef}
        className="flex flex-col items-center justify-center text-black  cursor-pointer border-black border max-w-[75px]"
      >
        <div>{image}</div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
          {name || "name"}
        </div>
      </div>
    </Draggable>
  );
}

export default DesktopIcon;
