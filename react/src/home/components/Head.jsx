import cyberwhite from '../assets/cyberwhite.png'

const Head = () => {
  return (
    <div id="mainhead">

      <div id="headlogo">
        <img src={cyberwhite} alt="cyberwhite" id='cyberwhitelogo' className='w-[40px] h-[40px]' />
      </div>
      <div id="allheadlinks">
      <div id="headlinks">
        <table id='headlinkstable'>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">Sales</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        </table>
      </div>
      <div id="headsearch">

      </div>
      <div id="headshopcart">

      </div>
      <div id="headsignin">

      </div>
      <div id="headsignup">

      </div>
    </div>
    </div>
  )
}

export default Head
