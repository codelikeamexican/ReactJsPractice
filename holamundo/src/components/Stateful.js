import React from 'react';

class Stateful extends  React.Component{
   constructor(props){
       super(props);
       this.state = {
           hello: 'hola mundo'
       }
   }
    render(){
        return(
            <h1>
                {this.state.hello}
            </h1>
        )
    }
}

export default Stateful;