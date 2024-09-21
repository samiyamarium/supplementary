import Image from "next/image";
import test from "../d1.png"
import neural from "./test3.gif"
export default function Home() {
  return (
    
        <div className="app" ><b>Hello World!!</b><br/><br/>
          I am an Engineer!!<br/>
          <p className="p"> This is my first assignment/project/milestone of NextJs using basic styling</p>
          <br/>
          <Image className="App-logo"
          src={test}
          alt="TESTIMAG"/>
          <br/>
          <p className="contact">Contact me!!</p>
          < a href="mailto:samiyamarium8@gmail.com">email</a>
          <br/>
          <a href="https://www.linkedin.com/in/samiya-marium-893192a8/">Linked-in</a>
<br/>
<iframe className="frame" src="https://cdn-images-1.medium.com/max/550/1*pO5X2c28F1ysJhwnmPsy3Q.gif" title="neural">Neural Networks for AI</iframe>          
          
          </div>
          
        
  );
}