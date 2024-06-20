import './App.css';
import Block from './component/Block';
import Dve_knop from './component/Dve_knop';
import End from './component/End';
import Header from './component/Header';
import Katalogi from './component/Katalogi';
import Menushka from './component/Menushka';
import Part from './component/Part';
import Slayder from './component/Slayder';
import Stroka from './component/Stroka';
import Svin from './component/Svin';
import Top from './component/Top';
import Video from './component/Video';
import Vkladki from './component/Vkladki';



const App = () => {
  return (
    <div className="Ap">
      <Header/>
      <Top/>
      <Stroka/>
      <Svin/>
      <Video/>
      <Block/>
      <Slayder/>
      <Katalogi/>
      <Dve_knop/>
      <Menushka/>
      <Vkladki/>
      <Part/>
      <End/>
    </div>
  );
}

export default App;

