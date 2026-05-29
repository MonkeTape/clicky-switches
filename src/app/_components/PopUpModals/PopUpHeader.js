function PopUpHeader({ children }) {
  return (
    <div className="w-full h-6 bg-computer-green-500 text-black border-black border-2 text-center handle cursor-pointer">
      {children}
    </div>
  );
}

export default PopUpHeader;
