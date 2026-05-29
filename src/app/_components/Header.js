import { FaApple } from "react-icons/fa";

function Header() {
  return (
    <div className="headerbar flex w-screen justify-between px-5 py-1 bg-computer-green-500 text-black border-b-black border-b-4">
      <div className="flex flex-row gap-5 ">
        <div className="text-2xl -mt-0.5">
          <FaApple />
        </div>
        <div>File</div>
        <div>View</div>
        <div>Special</div>
      </div>
      <div>Time</div>
    </div>
  );
}

export default Header;
