"use client";
import DesktopIcon from "./_components/DesktopIcon";
import PopUpWindow from "./_components/PopUpModals/PopUpWindow";
import {
  WindowContext,
  WindowDispatchContext,
} from "./_components/PopUpModals/WindowContext";
import { useReducer } from "react";

export default function Desktop() {
  const [windows, dispatch] = useReducer(windowsReducer, initialWindows);
  //handleCreateWindow: calls dispatch method to handle state changes in the windows
  // on page.
  function handleAddWindow(text) {
    dispatch({
      type: "add",
      id: nextId++,
      text: text,
      title: "",
    });
  }

  function handleRemoveWindow(windowId) {
    dispatch({
      type: "remove",
      id: taskId,
    });
  }

  return (
    <>
      <WindowContext value={windows}>
        <WindowDispatchContext value={dispatch}>
          {/* Icons */}
          <DesktopIcon name="parent" bounds="parent"></DesktopIcon>

          {/* Windows */}
          {windows.map((window) => (
            <PopUpWindow key={window.id} title={window.title}>
              {window.text}
            </PopUpWindow>
          ))}
          {/* TODO: remove this. Just testing add window */}
          <button
            onClick={() => {
              handleAddWindow("Hello im a new window");
            }}
          >
            Add window
          </button>
        </WindowDispatchContext>
      </WindowContext>
    </>
  );
}

// Reducer method to handle adding and removing windows from view.
// windows: List<Object>
// action: String
function windowsReducer(windows, action) {
  switch (action.type) {
    case "add": {
      return [
        ...windows,
        { id: action.id, title: action.title, text: action.text },
      ];
    }
    case "remove": {
      return windows.filter((w) => w.id != action.id);
    }
    default: {
      throw Error("Dunno what this action is chief: " + action.type);
    }
  }
}

let nextId = 2;
const initialWindows = [
  { id: 0, title: "Example!", text: "Window Content" },
  { id: 1, title: "Example Folder", text: "" },
  // may need to adapt this somehow to include text or subitems.
  // Shared 'window content interface'?
];
