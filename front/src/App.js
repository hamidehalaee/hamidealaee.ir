import './App.css'
import SkillBar from 'react-skillbars';
import Typewriter from 'typewriter-effect';
function App() {
  const SKILLS = [
    {
      "type": "Java",
      "level": 100
    },
    {
      "type": "React",
      "level": 85
    },
    {
      "type": "Javascript",
      "level": 75
    },
    {
      "type": "Spring",
      "level": 50
    },
    {
      "type": "Docker",
      "level": 25
    },
    {
      "type": "HTML",
      "level": 20
    },
    {
      "type": "NoSQL",
      "level": 0
    }
  ]
  const colors = {
    "bar": "black",
    "title": {
      "text": "#fff",
      "background": "black"
    }
  }
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
      <br />
      <SkillBar skills={SKILLS} colors={colors} height={21}></SkillBar>
    </div>
  );
}

export default App;
