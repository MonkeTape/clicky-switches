"use client";
import Draggable from "react-draggable";
import PopUpHeader from "./PopUpHeader";
import { useRef } from "react";

function PopUpWindow({ title, children, bounds = "parent" }) {
  const nodeRef = useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".handle"
      className="w-50 h-50"
      bounds={bounds}
    >
      <div ref={nodeRef} className="max-w-xl max-h-xl">
        <PopUpHeader>{title}</PopUpHeader>
        <div className="bg-computer-green-500 border-2 border-t-0 border-black text-black p-5 relative">
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default PopUpWindow;
