function PopUpHeader({ children, closeWindow }) {
  return (
    <div className="w-full h-6 bg-computer-green-500 text-black border-black border-2 text-center handle cursor-pointer">
      {children}
      <div
        className="absolute top-0 right-0 mx-2 mt-0.5 cursor-pointer "
        onClick={closeWindow}
      >
        X
      </div>
    </div>
  );
}

export default PopUpHeader;
