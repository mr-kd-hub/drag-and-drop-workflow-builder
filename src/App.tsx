import Output from "./sections/output";
import SideBar from "./sections/sidebar";
import Workflow from "./sections/workflow";
import store from "./store/reducer";
import { Provider } from "react-redux";
function App() {
  // const open:boolean = useSelector((state:RootState) => state.slice.open)
  // const dispatch = useDispatch()

  // const toggle = () => {
  //   dispatch(toggleModelAction())
  // }
  return (
    <Provider store={store}>
      {/* <SideBar /> */}
      <div className="">
        <SideBar>
          <Workflow />
          <Output />
        </SideBar>
      </div>
    </Provider>
  );
}

export default App;
