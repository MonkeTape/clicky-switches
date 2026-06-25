"use client";
import DesktopIcon from "./DesktopIcon";
import { useWindows } from "@/context/WindowsContext";

export default function Desktop() {
  const { windows } = useWindows();

  return (
    <>
      <DesktopIcon name="parent" bounds="parent"></DesktopIcon>
      {...windows}
    </>
  );
}
