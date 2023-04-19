import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    // approach-4 (short circuit operator)
return this.state.isLoggedIn && <div>Welcome Vinay</div>

        //  Approach-3 (Ternery operator) // 
    // // return this.state.isLoggedIn ? (
    // //     <div>Welcome vinay </div> 
    // //     ):(
    // //     <div> Welcome guest</div>
    // )
        
    // approach-2(element Vraibles )
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>welcome vinay</div>
    // } else {
    //     message = <div>welcome guest</div>
    // }
    // return <div>{message} </div>
    // }
        // approach-1 (if/else)
        // if (this.State.isLoggedIn){
    //     return <div>welcome Vinay</div>
    // } else {
    //     return <div>welcome guest</div>
    // }


    // return (
    //   <div>
    //     Welcome Vinay
    //   </div>
    // )
  }
  }
 

export default UserGreeting
