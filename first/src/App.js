import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import TaskListContext from './components/container/task_list_context'
import Example1 from './hooks/Example1';
import Example2 from './hooks/Example2';
import Example3 from './hooks/Example3';
import Example4 from './hooks/Example4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import AxiosCrudExample from './components/pure/AxiosCrudExample';

function App() {
  return (
    <div className="App">
    {/*<header className="App-header">*/}
      
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* <Greeting name={"Peter"}></Greeting> */}
        {/* <GreetingF name="Peter"></GreetingF> */}    
        {/* <ContactList></ContactList>*/}
        {/*<Example1></Example1> useState*/}
        {/*<Example2></Example2> useState - useRef - useEffect */}
        {/*<Example3></Example3> useState & useContext */} 
        {/*<Example4 name='Peter'>
          <h3>
            props.children content
          </h3>
        </Example4>*/}
        {/*<GreetingStyled name="Gustavo"></GreetingStyled> */}
        {/* <Father></Father> */}
        {/* Conditional render examples */}
        {/*<OptionalRender></OptionalRender> */}

        {/*Formik and Yup Examples*/}
        {/*<LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
       
        {/*Async Examples */}
        {/*<AsyncExample></AsyncExample> */}
        {/*RxJS*/}
        {/*<ObservableExample></ObservableExample> */}
        
        {/* Fetch */}
        {/*<FetchExample></FetchExample> */}
        

        {/*Axios*/}
        {/*<AxiosExample></AxiosExample> */}
        

        {/*<AxiosCrudExample></AxiosCrudExample>*/}
        {/* <TaskListComponent></TaskListComponent> */}
         

        <TaskListContext></TaskListContext>
        
  
    {/*</header> */}
      
    </div>
  );
}

export default App;
