const Header = () => {
  return (
    <div className="w-screen h-24 flex justify-center items-center bg-[#1b1b1b] text-white     ">
      <div className="w-[80%] h-full flex justify-center items-center flex-col">
        <div className="w-full h-2/3 border-b-[1px] border-[#222222] flex justify-between items-center ">
          <div className="flex justify-center items-center">
            <p>HORLOO</p>
            <div className="bg-orange-500 text-black p-1 rounded ">HUB</div>
          </div>
          <input
            className="w-60 h-10 bg-[#2a2a2a] rounded outline-0 p-2"
            placeholder="search HHUB"
          ></input>
          <div className="flex justify-center items-center gap-10 text-xs">
            <p>LOGIN</p>
            <p>SIGN UP</p>
          </div>
        </div>
        <div className="w-full h-1/3 border-b-[1px] border-[#222222] flex justify-between items-center ">
          <div className="w-auto text-xs font-bold">HOME</div>
          <div className="w-auto text-xs font-bold">HOR PICTURES</div>
          <div className="w-auto text-xs font-bold">HOR STARS</div>
          <div className="w-auto text-xs font-bold">CUMMUNITY</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
