
import Content from './Content';
import Mincont from './Mincont';
import {useState} from 'react'

function App() {

  const [color,setColor]=useState('')
  const [hexValue,setHexValue]=useState('')
  const[isDark,setIsDark]=useState(true);

  // const name='red'
  // setColor(name)
  const handle=()=>{
  console.log('click')
    setIsDark(!isDark);
}

  return (
    <div className="App">
     <Content
     color={color}
     hexValue={hexValue}
     isDark={isDark}
     />
     <Mincont
     color={color}
     setColor={setColor}
     setHexValue={setHexValue}
     handle={handle}
     />
    </div>
  );
}

export default App;
