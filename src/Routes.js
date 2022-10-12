import { Route, Routes as Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";

import ROUTES_CONFIG from "./config/routes";

function Routes() {
    return (
        <Switch>
          {ROUTES_CONFIG.map((route, index) => {
            const Page = route.page;

            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<Page />}
              />
            );
          })}
          {/* <Route>
            <NotFound />
          </Route> */}
        </Switch>
    )
}

export default Routes;