function Navbar() {
  return (
    <nav className="w-full h-20 flex bg-[#f3f3f3] justify-center">
      <div className="logo italic text-3xl text-[#333535] font-bold w-32 mt-[1.5rem] mr-[17rem]">
        IT-tech
      </div>
      <ul className="text-[#8a8a8a] font-medium h-full flex items-center w-[44rem]">
        <li className="text-[#3292ea] mx-9">
          <a href="">Home</a>
        </li>
        <li className="mx-9 hover:text-[#0085ff]">
          <a href="">About</a>
        </li>
        <li className="mx-9 hover:text-[#0085ff]">
          <a href="">Services</a>
        </li>
        <li className="mx-9 hover:text-[#0085ff]">
          <a href="">Team</a>
        </li>
        <li className="py-[0.7rem] px-5 bg-[#0085ff] rounded-lg text-white mx-9 cursor-pointer drop-shadow-[0_5px_5px_rgba(0,133,255,0.12)]">
          <a href="">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
