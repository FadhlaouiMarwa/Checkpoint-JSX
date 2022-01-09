import logo from './logo.svg';
import './App.css';
import Imagesrc from './Imagesrc.jpeg'
function App() {
  return (
    <div className="App">
     <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="title red" style={{color:"#FF33E6"}} >Checkpoint Fadhlaoui Marwa JSX</h1>

<br/>

<img src="/ImagePublic.jpg" / >

<br/>

<img src={Imagesrc}/ >

</div>

<vidéo width="320" height="240" contrôles>

<source src="maVidéo.mp4" type="video/mp4"/ >

</vidéo>
    </div>
  );
}

export default App;
