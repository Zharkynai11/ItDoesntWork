import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import MovieAdd from "./containers/MovieAdd/MovieAdd";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Logout from "./containers/Logout/Logout";
import AuthRoute from "./containers/AuthRoute/AuthRoute";
import Menu from "./components/Menu/Menu";

class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <AuthRoute path="/movies/add" component={MovieAdd}/>
                        <Route path="/movies/add" component={MovieAdd}/>
                        {/* :id обозначает переменную id */}
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/movies/:id" component={MovieDetail}/>
                        <Route path="/" component={MovieList}/>
                        <Route path="/register" component={Register}/>
                        <Menu></Menu>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
