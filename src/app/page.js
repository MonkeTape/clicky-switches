"use client";
import { WindowsProvider } from "@/context/WindowsContext";
import Desktop from "./_components/Desktop";

export default function Page() {
  return (
    <WindowsProvider>
      <Desktop />
    </WindowsProvider>
  );
}
