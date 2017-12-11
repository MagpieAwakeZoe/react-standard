/**
 * Created by by on 2017/11/2.
 */
import React from 'react'
import  {render} from 'react-dom';
import  {AppContainer} from  'react-hot-loader';
import router from './routes/router/router'

render(
    <AppContainer>
        {router}
    </AppContainer>,
    document.getElementById("root")
);

if (module.hot){
    module.hot.accept('./routes/router/router',() =>{
        const NewRoot = require('./routes/router/router').default;
        render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
            document.getElementById('root')
        );
    });
}