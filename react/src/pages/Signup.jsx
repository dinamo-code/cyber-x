import cyberpurplelogo2 from './assets/cyberpurplelogo2.png'
import verified2 from './assets/verified2.png'
const Signup = () => {
  return (
    <div id="signupcontainer">
    <div id='mainsignup'>
        <div id="signuphead">
            <div id="logosignupcontainer">
              <img src={cyberpurplelogo2} alt="cyberpurplelogo2"className='w-[45px] h-[45px]' />
            </div>
            <table id='signupheadlinks'>
                <ul>
                    <li><a href="/" title='Home page' id='signuphomehead'>Home</a></li>
                    <li><a href="login" title='Log in page' id='loginheadbutton'>Log in</a></li>
                </ul>
            </table>
        </div>
        <div id="signupimgcontainer">
            {/* <img src={amperlashop} alt="amperlashop" id='amperlashopimg' className='150px'/> */}
        </div>
        <div id="signupcard">
            <div id="signupcardverifiedimg">
            <img src={verified2} alt="verified" id='verifiedssignupcard' className='w-[45px] h-[45px]' />
            <h2 id='createacounttitle'>Create Account <span>+</span></h2>
        </div>
        <div id="signupfields">
        <div id="signupname">
        <h3>Name</h3>
        <input type="text" placeholder='Enter your name' id='namefieled' required/>
        </div>
        <div id="signupemail">
        <h3>Email</h3>
        <input type="email" placeholder='Enter your Email' id='emailfieled' required/>
        </div>
        <div id="signuppassword">
        <h3>Password</h3>
        <input type="password" placeholder='Enter your Password' id='passwordfieled' required/>
        </div>
        </div>
         <div id="signupsendbuttom">
        <input type="button" value="Sign up" id='submitbtnsignup' />
        </div>

        </div>
    </div>
    </div>

  )
}

export default Signup
