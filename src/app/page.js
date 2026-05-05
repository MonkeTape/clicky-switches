<<<<<<< HEAD
import DesktopIcon from "./_components/DesktopIcon";

export default function MyThree() {
  return (
    <div className="text-computer-green-500 plaid h-screen">
      <div>Desktop Text</div>
      <DesktopIcon name="tester" />
    </div>
=======
"use client";
import Draggable from "react-draggable";
import {useRef} from 'react';
export default function MyThree() {
  const nodeRef = useRef(null)

  return (
      <div className="text-computer-green-500">Desktop Text
        <Draggable nodeRef={nodeRef}>
          <div className= "w-10 bg-red-500" ref = {nodeRef}>I can now be moved around!</div>
        </Draggable>
      </div>
>>>>>>> 09eebe1 (added draggable)
  );
}
