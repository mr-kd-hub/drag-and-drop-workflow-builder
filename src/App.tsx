import Output from "./sections/output";
import SideBar from "./sections/sidebar";
import Workflow from "./sections/workflow";
import  store  from './store/reducer'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <SideBar />
      <div className="">
        <Workflow />
        <Output />
      </div>
    </Provider>
  );
}

export default App;
