import DesktopIcon from "./_components/DesktopIcon";
import FolderModal from "./_components/PopUpModals/FolderModal";
import PopUpWindow from "./_components/PopUpModals/PopUpWindow";

export default function MyThree() {
  return (
    <div className="text-computer-green-500">
      Desktop Text
      <DesktopIcon name="anthonysicon"></DesktopIcon>
      <PopUpWindow title={"Example!"}>
        <div className="w-[400px]">Window Content</div>
      </PopUpWindow>
      <FolderModal />
    </div>
  );
}
