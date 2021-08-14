import './App.css'
import SkillBar from 'react-skillbars';
import Typewriter from 'typewriter-effect';
function App() {
  const SKILLS = [

    {
      "type": "Javascript",
      "level": 50
    },
    {"type": "Nodejs", "level": 30
  },
    {
      "type": "Docker",
      "level": 25
    },
    {
      "type": "NoSQL",
      "level": 12
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
          strings: ['Hello World From Hamide Alaeeee','Hamideh is a software engineer and full-stack web developer using node.js in back-end and angular, react in front-end ','and it is nice to meet you.' ],
          autoStart: true,
          loop: false,
        }}
      />
      <br />
      <hr style={{height : "3px"}} />
      <h1>Ma Skills</h1>
      <SkillBar skills={SKILLS} colors={colors} height={23}></SkillBar>
      
    </div>
  );
}

export default App;
