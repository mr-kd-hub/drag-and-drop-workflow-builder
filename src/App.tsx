import Output from "./sections/output";
import SideBar from "./sections/sidebar";
import Workflow from "./sections/workflow";
import store from "./store/reducer";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="h-full pt-4 pr-4 pl-4">
        <SideBar>
          <div className="h-[50%] w-full">
            <Workflow />
          </div>
          <div className="h-[50%] w-full">
            <Output />
          </div>
        </SideBar>
      </div>
    </Provider>
  );
}

export default App;
