"use client";

import { createContext, useContext, useState } from "react";
import PopUpWindow from "@/app/_components/PopUpModals/PopUpWindow";

const WindowsContext = createContext();
let windowId = 0;

function WindowsProvider({ children }) {
  const [windows, setWindows] = useState([]);

  // todo: there is a bug that closes out all the windows. this sucks. fix it
  function closeWindow(id) {
    setWindows((windows) =>
      windows.filter(({ key }) => {
        console.log("-----------", key);
        key !== id;
      }),
    );
  }

  // todo: the keys won't work like this. the index is a bad key
  // do something like a hash value or something to generate a unique key for each window

  //todo: don't wrap the content in the windows here, just pass the content and title to the PopUpWindow component and let it handle the rest. this way we can have more control over the windows and their content.

  //todo: when opening a window, if it was already opened, don't open it again
  function addWindow(content, title) {
    setWindows((windows) => {
      let idInstance = ++windowId;
      const new_windows = [
        ...windows,
        <PopUpWindow
          title={title}
          key={idInstance}
          closeWindow={() => closeWindow(idInstance)}
        >
          {content}
        </PopUpWindow>,
      ];
      return new_windows;
    });
  }

  return (
    <WindowsContext.Provider value={{ windows, addWindow }}>
      {children}
    </WindowsContext.Provider>
  );
}

function useWindows() {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows must be used within a WindowsProvider");
  }
  return context;
}

export { WindowsProvider, useWindows };
