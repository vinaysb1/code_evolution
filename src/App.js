import React from 'react';
import './App.css';
// import Greet from './Components/Greet';
// import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <Inline /> */}
    {/* <Stylesheet primary ={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message/> */}

      {/* <Greet name="kuvempu" famous="writing">
        <p>This is children</p>
      </Greet>
      <Greet name="spb" famous="singing" />
      <button>Action </button>
      <Greet name="tata" famous="business" />

      <Welcome name="kuvempu" famous="writing"/>
      <Welcome name="spb" famous="singing" />
      <Welcome name="tata" famous="business" /> */}


    </div>
  );
}

export default App;
