// import logo from "./logo.svg";
import "./App.css";
// import ParentComponent from "./components/AboutComponents/ParentComponent";
// import PureComponent from "./components/AboutComponents/PureComponent";
// import Fragment from "./components/Fragment/Fragment";
// import Table from "./components/Fragment/Table";
// import UpdateLifeCycleA from "./components/LifeCycleMthods/UpdatingMethods/LifeCycleA";
// import LifeCycleA from "./components/LifeCycleMthods/MountingMethods/LifeCycleA";
// import styles from "./components/StylingAndCSSBasics/myStyle.module.css";
import "./components/cssStyleSheet.css";
import FRParentInput from "./components/Forwarding Refs/FRParentInput";
// import FocusInput from "./components/Refs/FocusInput";
// import RefsDemo from "./components/Refs/RefsDemo";
// import CSSStyleSheet, {CSSModule,Inline,} from "./components/StylingAndCSSBasics/StylingAndCSSBasics";
// import Hello from "./components/aboutJSX";
// import BasicsOfFormHandling from "./components/BasicsOfFormHandling";
// import IndexAsKeyAntiPattern from "./components/IndexAsKeyAnti-Pattern";
// import ListRendering from "./components/ListRenderingAndKeys";
// import ConditionalRendering from "./components/ConditionalRendering";
// import ParentComponent from "./components/MethodsAsProps/ParentComponent";
// import BindingEventHandlers from "./components/BindingEventHandlers";
// import { Greet } from "./components/typesOfComponents"; // Info: Used when usinng named exported method.
// import Greet, { Greeter, Greeting } from "./components/typesOfComponents";
// import JSXExplanation from "./components/aboutJSX";
// import PropsExplanation from "./components/aboutProps";
// import StateExplanation, { UserMessage } from "./components/aboutState";
// import SetStateExplanation from "./components/aboutSetState";
// import DestructuringPropsAndState, {Welcome,} from "./components/DestructuringPropsAndState";
// import FunctionEventHandler, {ClassEventHandler,} from "./components/EventHandler";

function App() {
  return (
    <div className="App">
      {/* {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greet></Greet>  //Info: Defaullt tag type
      <h2>From Props using functions.</h2>
      <Greet name="User" />
      <Greet name="User1">
        <p>This is a children</p>
      </Greet>
      <Greet name="User1">
        <button>Action</button>
      </Greet>
      <h2>From Props using class.</h2>
      <PropsExplanation name="User" /> Info: Self Closing Tag
      <PropsExplanation name="User1">
        <p>This is a children</p>
      </PropsExplanation>
      <PropsExplanation name="User1">
        <button>Action</button>
      </PropsExplanation>
      {/* <JSXExplanation /> */}
      {/* <StateExplanation /> */}
      {/* <UserMessage /> */}
      {/* <SetStateExplanation /> */}
      {/* <DestructuringPropsAndState name="Peter" heroName="Spidy" /> */}
      {/* <Welcome name="Bruce" heroName="Superman" /> */}
      {/* <FunctionEventHandler /> */}
      {/* <ClassEventHandler /> */}
      {/* <BindingEventHandlers /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <IndexAsKeyAntiPattern /> */}
      {/* <CSSStyleSheet primary={true} /> */}
      {/* <div className="App">
        <h4 className={styles.sucess}>Sucess</h4>
        <h4 className="error">Error</h4>
      </div> */}
      {/* <Hello /> */}
      {/* <Inline /> */}
      {/* <CSSModule /> */}
      {/* <BasicsOfFormHandling /> */}
      {/* <LifeCycleA /> */}
      {/* <UpdateLifeCycleA /> */}
      {/* <Fragment /> */}
      {/* <Table /> */}
      {/* <PureComponent /> */}
      {/* <ParentComponent /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      <FRParentInput />
    </div>
  );
}

export default App;
