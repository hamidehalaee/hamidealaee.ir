import './App.css'
import Typewriter from 'typewriter-effect';
function App() {
  return (
    <div className="App">

      <div class="menu">

        {/* <!-- <button type="button">ABOUT</button>
        <div class="dropdown">

           
        </div> --> */}
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/projects" style={{textDecoration: "none",color: "inherit"}}>PROJECTS</a></button>
            {/* <!-- <div class="dropdown-contact">
                <button type="button">GITHUB</button>
                <button type="button">THIS SITE</button>
            </div> --> */}
        </div>
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/contact"  style={{textDecoration: "none",color: "inherit"}}>CONTACT</a></button>
            {/* <!-- <div class="dropdown-contact">
                <button type="button">LINKEDIN</button>
                <button type="button">EMAIL</button>
                <button type="button">PHONE</button>
            </div> --> */}
        </div>
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/contact"  style={{textDecoration: "none",color: "inherit"}}>RESUME</a></button>
            {/* <!-- <div class="dropdown-contact">
                <button type="button">RESUME</button>
            </div> --> */}
        </div>


      </div>
      <br />
      
      {/* <header style={{width:"100%" ,height: "100% "}}>
      </header> */}
      <br />
      <Typewriter className="type"
        options={{
          strings: ['Hello World From Hamide Alaeeee'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default App;
