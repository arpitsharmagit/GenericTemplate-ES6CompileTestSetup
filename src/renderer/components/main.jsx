import React from 'react';
import {shell} from 'electron';

  const TITLEBAR_HEIGHT = 30;

  export default class Main extends React.Component {
    constructor(){
      super();
      this.state ={
        message:'Hello GlobalLogic!',
        welcome:true
      }
    };
    openGLGlo(){
      shell.openExternal('http://glo.GlobalLogic.com')
    }
    render(){
      let img;

      if(this.state.welcome){
        img= <img src="../assets/images/electron.svg" alt="" width="128px" ref="mainImg" />
      }

      return (
          <div className="main" ref="main" style={{
            paddingTop: TITLEBAR_HEIGHT
          }}>

          <h1>{this.state.message}</h1>

          {img}

          <footer>
            <p>
                <a href="#" onClick={this.openGLGlo.bind(this)}>Glo</a> Powered by GlobalLogic
            </p>
          </footer>
        </div>
      );
    }
  }
