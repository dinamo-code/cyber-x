import cyberwhite from '../assets/cyberwhite.png'
import cart from '../assets/cart.png';
import close from '../assets/close.png';
import menu from '../assets/menu.png';
import { useState } from 'react';
const Head = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div id="mainhead">

      <div id="headlogo">
        <img src={cyberwhite} alt="cyberwhite" id='cyberwhitelogo' className='w-[40px] h-[40px]' />
      </div>
      <div id="allheadlinks">
      <div id="headlinks">
        <table id='headlinkstable'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="products">Products</a></li>
            <li><a href="trends">Trending</a></li>
            <li><a href="sales">Sales</a></li>
            <li><a href="contact">Contact</a></li>

        </ul>
        </table>
      </div>
      <div id="smallmediaheader">
        <ul>
            <div id="headsignup">
        <div id="signupheadbtn">
           <a href="signup" id='signupheadbtnlink'><h2>Sign up</h2></a>
        </div>
      </div>
              <div id="smallheadlinks">
      <div id="headmenu">
            <img src={toggle ? close  : menu} alt="menu"  onClick={() => setToggle(!toggle)} id='headmenuimg' className='w-[24px] h-[24px] absolute right-[15px]'/>
        </div>
        <div
        id="smmenudiv"
          className={`${
            !toggle ? "hidden" : "flex"
          } p-4  bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex justify-end items-start flex-1 flex-col mr-4 " id="smmenuheader">
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Trending</a></li>
            <li><a href="">Sales</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Cart</a></li>

          </ul>
        </div>
        </div>
        </ul>
        </div>

      <div id="headshopcart">
       <a href="shoppingcart"> <img src={cart} alt="shoppingcart" id='shoppingcartheadimg' className='w-[35px] h-[35px]'/></a>
        <div></div>
      </div>



      </div>
    </div>
  )
}

export default Head
