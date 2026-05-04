import { FaApple } from "react-icons/fa";

function Header() {
  return (
    <div className="flex w-screen absolute justify-between px-5 py-1 bg-[#c8fbd4]">
      <div className="flex flex-row gap-5 text-[#000]">
        <div className="text-2xl">
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
