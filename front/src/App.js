import './App.css'
import SkillBar from 'react-skillbars';
import Typewriter from 'typewriter-effect';
function App() {
  const SKILLS = [

    {
      "type": "Javascript",
      "level": 50
    },
    {"type": "Node.js",
     "level": 30
    },
    {
      "type": "Docker",
      "level": 25
    },
    {
      "type": "NoSQL",
      "level": 12
    },
    {
      "type": "SQL",
      "level": 14
    },
    {
      "type": "React.js",
      "level": 12
    },
    {
      "type": "Angular",
      "level": 10
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
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/projects" style={{textDecoration: "none",color: "inherit"}}>PROJECTS</a></button>
        </div>
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/contact"  style={{textDecoration: "none",color: "inherit"}}>CONTACT</a></button>
        </div>
        <div class="dropdown">
            <button type="button" class="dropbtn"><a href="/contact"  style={{textDecoration: "none",color: "inherit"}}>RESUME</a></button>
        </div>
      </div>
      <br />
      <br />
            <Typewriter className="type" 
        options={{
          strings: ['Hello World From Hamideh Alaeeee','Hamideh is a software engineer and full-stack web developer using node.js in back-end and angular, react in front-end.','and it is nice to meet you.' ],
          autoStart: true,
          loop: true,
        }}
      />
      <br />
      <hr style={{height : "4px"}} />

      <div style={{  
  left: "150px",
  width: "200px",
  height: "100px",
 }}>
      <h1>Ma Skills</h1>
      </div>


      <SkillBar skills={SKILLS} colors={colors} height={24}></SkillBar>
      <hr style={{height : "4px"}} />
      <div style={{  
  left: "150px",
  width: "200px",
  height: "80px",
 }}>

      <h1>Educations</h1>
      </div>
      <h3 style={{  
  left: "150px",width: "65%",}}>Islamic Azad University Branch Of Eslamshahr ,2019-2022</h3>
      <p style={{  
  left: "150px",width: "55%",}}>Bachelor Of Computer Science engineering of software.</p>
    </div>
  );
}

export default App;
