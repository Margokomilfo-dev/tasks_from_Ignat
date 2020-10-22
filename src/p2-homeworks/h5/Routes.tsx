import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Student1 from "./pages/Student1";
import Student2 from "./pages/Student2";
import s from './Header.module.css'

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    STUDENT1: "/student1",
    STUDENT2: "/student2",
    STUDENT3: "/student3"
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}

            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path={"/"} exact render={() => <Redirect to={'/PRE_JUNIOR'}/>}/>
                <Route path={"/STUDENT1"} exact render={() => <Student1/>}/>
                <Route path={"/STUDENT2"} exact render={() => <Student2/>}/>
                <Route path={'/PRE_JUNIOR'} render={() => <PreJunior/>}/>
                // add routes
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
}

export default Routes;
