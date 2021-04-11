import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from "react";
import PageCharacter from '../pages/pageCharacter/pageCharacter';
import PageComics from '../pages/pageComics/pageComics';
import HomePage from '../pages/homePage/homePage';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <HomePage/>
        </Route>   
        <Route exact path="/:inputValue">
            <PageCharacter/>
        </Route>
        <Route exact path="/:idPersonagem/comics">
            <PageComics/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;