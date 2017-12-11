/**
 * Created by by on 2017/11/2.
 */
// root文件作为一个包裹器，将所有组件包裹在root下面，作为一个入口

import React, { render } from 'react'
import Header from './components/header/header'
import MainContent from './components/contents/mainContent/mainContent'
import Comment from './components/contents/comment/comment'
let Root = React.createClass({
    render(){
        return (
            <div>
                <Header/>
                <MainContent/>
                <Comment/>
            </div>
        );
    }
});

export default Root;