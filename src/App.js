import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from './components/Cart'
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

 
function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <Switch>
                    <Route path="/Register">
                        <Register />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/Cart">
                        <Cart />
                    </Route>
                    <Route path="/Product">
                        <ProductPage />
                    </Route>
                    <Route path="/ProductList">
                        <ProductList />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    </div>
    );
}

export default App;
