import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout/Layout';
import { publicRoutes } from '~/Routes/Routes.js';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route exact key={index} path={route.path} element={
                  route.layout ? <route.layout><Page /></route.layout> :
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>}
                />
              );
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


