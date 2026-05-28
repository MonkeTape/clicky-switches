"use client";
import Draggable from "react-draggable";
import PopUpHeader from "./PopUpHeader";
import { useRef } from "react";

function PopUpWindow({ title, children }) {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef} handle=".handle">
      <div ref={nodeRef} className="fixed">
        <PopUpHeader>{title}</PopUpHeader>
        <div className="bg-computer-green-500 border-2 border-t-0 border-black text-black">
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default PopUpWindow;
