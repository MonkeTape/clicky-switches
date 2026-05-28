function PopUpHeader({ children }) {
  return (
    <div className="w-full h-6 bg-computer-green-500 text-black border-black border-2 text-center handle">
      {/* <strong>{children}</strong> */}
      {children}
    </div>
  );
}

export default PopUpHeader;
