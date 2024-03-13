import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Details from "./components/Details";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route path="main" element={<Main />} />
      <Route path="details" element={<Details />} />
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    // <Router>
    //   <div
    //     className="App"
    //     style={{
    //       minHeight: "100vh",
    //       backgroundColor: "#f3f6fa",
    //     }}
    //   >
    //     <Switch>
    //       <Route exact path="/" component={Login} />
    //       <Route path="/main" component={Main} />
    //       <Route path="/details" component={Details} />
    //       <Route component={NotFound} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
