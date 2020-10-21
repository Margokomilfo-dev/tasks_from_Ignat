import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Student1 from "./pages/Student1";
import Student2 from "./pages/Student2";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    // add paths
}

function Routes() {
    return (
        <div>

           <span> (props.selected === true)
            ?   <b>Star</b>
               : 'Star'
           </span>
        {/*    return <span className={`${classes.star} +${classes.starActive}`}>*/}
        {/*    <b>Star</b>*/}
        {/*    </span>*/}
        {/*} else {*/}
        {/*    return <span className={classes.star}>Star</span>*/}
        {/*}*/}


            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={'/PRE_JUNIOR'}/>}/>
            <Route path={"/student1"} exact render={() => <Student1/>}/>
            <Route path={"/student2"} exact render={() => <Student2/>}/>

            <Route path={'/PRE_JUNIOR'} render={() => <PreJunior/>}/>
                // add routes

            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    );
}

export default Routes;
