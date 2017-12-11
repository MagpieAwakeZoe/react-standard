/**
 * Created by by on 2017/12/11.
 */
import React, { render } from 'react'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'       //导入react的路由
import Comments from '../../pages/comment'
import Find from '../../pages/find'
import Read from '../../pages/must_read'
import Question from '../../pages/question'

let Rs = React.createClass({
    render(){
        return(
        <Router history={hashHistory}>
            {/*最顶级的路由*/}
            <Route path="/" components={App}>
                <Route path="/" components={App}></Route>
                <Route path="/list2" components={Comments}></Route>
                <Route path="/list3" components={Find}></Route>
                <Route path="/list4" components={Read}></Route>
                <Route path="/list5" components={Question}></Route>
            </Route>
        </Router>
        );
    }

});

export default Rs;