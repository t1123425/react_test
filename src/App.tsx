import React from 'react';
import { mainTheme, darkMode} from './assets/styles/theme.css';
import { flexWrap } from './assets/styles/main.css';
import LeftArea from './components/leftArea';
import RightArea from './components/rightArea';
import { useSelector } from 'react-redux';



const App:React.FC = () => {
  const isDark = useSelector((state:any) => state.AppReducer.isDark);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-center'>Pionering React Test</h1>
      </header>
      <section className={mainTheme +' '+flexWrap +' '+(isDark&& darkMode)}>
        <LeftArea />
        <RightArea/>
        </section>
    </div>
  );
}

export default App;
