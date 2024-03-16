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
          <div className="flex flex-col h-full gap-4 overflow-scroll">
            <div className="h-full w-full">
              <Workflow />
            </div>
            <div className="h-full w-full border-dashed border-gray-600 rounded-lg">
              <Output />
            </div>
          </div>
        </SideBar>
      </div>
    </Provider>
  );
}

export default App;
