import './App.css';
import Logo from "./img/par branco.png"
import Foto from "./img/eagles.png"
import pem from "./img/download.jpeg"

function App() {
  return (
    <div className="App">

    <div>
      <img class="nnn" src={pem} width={100} height={50}></img>
    </div>

    <div>
      <img class="lll" src={Foto} width={150} height={100}></img>
    </div>

    <div>
    <img  class="img" src={Logo} width={450} height={350}></img>

    </div>

      <h1 class="aaa">Tênis Casual: Masculino Finity</h1>

      <p1 class="bbb">Masculino / Calçados / Esportivo</p1>

      <h2 class="ccc">R$ 379,90</h2>

      <h3 class="ddd">Cor white</h3>

      <p2 class="eee">6x de R$ 53,49</p2>

      <button class="fff">Masculino</button>

      <button class="ggg">Feminino</button>

      <button class="hhh">infantil</button>

      <button class="iii">Coleções</button>

      <button class="jjj">Voltar</button>

      <button class="kkk">Avançar</button>
      
    </div>
  );
}

export default App;
