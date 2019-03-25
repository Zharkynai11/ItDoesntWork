import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';
import MovieList from "./containers/MovieList/MovieList";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import MovieAdd from "./containers/MovieAdd/MovieAdd";
import Register from "./containers/Register/Register";


class App extends Component {
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/movies/add" component={MovieAdd}/>
                        {/* :id обозначает переменную id */}
                        <Route path="/movies/:id" component={MovieDetail}/>
                        <Route path="/" component={MovieList}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
