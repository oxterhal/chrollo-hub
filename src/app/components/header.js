export default function Header() {
  return (
    <header className="w-screen h-24 bg-[#1b1b1b] text-white flex flex-col justify-center items-center">
      <div className="w-[80%] h-full flex justify-between items-center border-b border-[#222222]">
        <div className="flex items-center">
          <p className="font-bold text-lg">HORLOO</p>
          <div className="bg-orange-500 text-black px-2 py-1 rounded ml-2">
            HUB
          </div>
        </div>
        <input
          className="w-60 h-10 bg-[#2a2a2a] text-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Search HHUB..."
        />
        <div className="flex gap-5">
          <button className="hover:text-gray-400">LOGIN</button>
          <button className="hover:text-gray-400">SIGN UP</button>
        </div>
      </div>
      <nav className="w-[80%] flex justify-around text-sm font-semibold py-2">
        <a href="#" className="hover:text-orange-500">
          HOME
        </a>
        <a href="#" className="hover:text-orange-500">
          HOR PICTURES
        </a>
        <a href="#" className="hover:text-orange-500">
          HOR STARS
        </a>
        <a href="#" className="hover:text-orange-500">
          COMMUNITY
        </a>
      </nav>
    </header>
  );
}
