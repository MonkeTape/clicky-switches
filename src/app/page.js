import DesktopIcon from "./_components/DesktopIcon";
import PopUpWindow from "./_components/PopUpModals/PopUpWindow";

export default function Desktop() {
  return (
    <>
      <DesktopIcon name="parent" bounds="parent"></DesktopIcon>

      <PopUpWindow title="Example!">Window Content</PopUpWindow>
      <PopUpWindow title="Example Folder">
        <DesktopIcon name="Icon1231213"></DesktopIcon>
        <DesktopIcon name="Icon2"></DesktopIcon>
        <DesktopIcon name="Icon3"></DesktopIcon>
      </PopUpWindow>
    </>
  );
}
