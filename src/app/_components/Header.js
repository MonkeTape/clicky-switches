import HeaderMenu from "./HeaderMenu";

function Header() {
  return (
    <div className="headerbar flex w-screen justify-between px-5 bg-computer-green-500 text-black border-b-black border-b-4 z-10">
      <HeaderMenu></HeaderMenu>
      <div>Time</div>
    </div>
  );
}

export default Header;
