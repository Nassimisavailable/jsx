import imir from "./imir.jpg"
import './style.css'
import './App.css';

function App() {
  return (
    <div className="App" style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 className="title red">Your name here</h1>

    <br/>

    <img src={imir} alt="vladimir"/>

    <br/>

    <img src="/vlad.jpg" alt="vladimir"/>



    <video width="320" height="240" controls>

    <source src="myVideo.mp4" type="video/mp4" />

    </video>
    </div>
  );
}
export default App;