"use client";
import Draggable from "react-draggable";
import {useRef} from 'react';

import DesktopIcon from "./_components/DesktopIcon";


export default function MyThree() {
  const nodeRef = useRef(null)

  return (
      <div className="text-computer-green-500">Desktop Text
        <DesktopIcon name = "anthonysicon"></DesktopIcon>
      </div>
  );
}
