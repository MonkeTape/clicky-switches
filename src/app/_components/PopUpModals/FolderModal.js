import DesktopIcon from "../DesktopIcon";
import PopUpWindow from "./PopUpWindow";

function FolderModal({ children }) {
  return (
    <PopUpWindow title="Example Folder!">
      <div className="min-w-[500px] min-h-[500px]">
        <DesktopIcon name="anthonysicon12" bounds="parent"></DesktopIcon>
        <DesktopIcon name="anthonysicon13" bounds="parent"></DesktopIcon>
        <DesktopIcon name="anthonysicon14" bounds="parent"></DesktopIcon>
      </div>
    </PopUpWindow>
  );
}

export default FolderModal;
