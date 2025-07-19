import { createBrowserRouter } from "react-router";
import Body from "./components/Body";
import Header from "./components/Header";
import MainVideoContainer from "./components/MainVideoContainer";
import { Provider } from "react-redux";
import Store from "./utils/Store";
import Watchh from "./components/Watchh";

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        elements: <Body />,
        children: [
          {
            path: "/",
            element: <MainVideoContainer />,
          },
          {
            path: "/watch",
            element: <Watchh />,
          },
        ],
      },
    ],
  },
]);

export default appRouter;
