/**
 * Created by by on 2017/12/11.
 */
import React from 'react'
import './header.less'
let Header = React.createClass({
    render(){
        return(
           <div className="container0">
                <div className="container">
                    <div className="block block1">
                        <p className="font">首页</p>
                    </div>
                    <div className="block block2">
                        <p className="font">评论</p>
                    </div>
                    <div className="block block3">
                        <p className="font">查找目录</p>
                    </div>
                    <div className="block block4">
                        <p className="font">新人必读</p>
                    </div>
                    <div className="block block5">
                        <p className="font">问题</p>
                    </div>
                </div>
           </div>
        );
    }
})

export default Header;