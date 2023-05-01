import { Fragment } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { DefaultLayout } from "./Components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        {PublicRoutes.map((route, index) => {
          let Layout = DefaultLayout;

          if(route.layout) {
            Layout = route.layout
          }else if(route.layout === null) {
            Layout = Fragment
          }
          const Page = route.component;
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={
                <Layout>
                  <Page/>
                </Layout>
              }
            />)})}
      </Routes>
    </div>
  );
}

export default App;
