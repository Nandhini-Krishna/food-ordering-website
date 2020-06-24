import React,{Component} from 'react';
import '../Signup/signupModal.css';

class SignupModal extends Component {
    state = {  
        
    }
    init(isShowing)
    {
        console.log("init",isShowing)
        this.setState({isShowing})
    }
    render() { 
       let { isShowing } = this.state;
        return ( 
            !isShowing ? <div></div> : 
            <div>
               <div>
                   <div className="overlay" 
                   style={{
                    opacity : isShowing ? "1":"0",
                    display : isShowing ? "block" : "none"}}>
                    </div> 
                    <div className="overlay-side"
                      style={{
                        opacity : isShowing ? "1":"0",
                        display : isShowing ? "block" : "none"}}>
                        <div className="overlay-padding">
                        <div className="overlay-header">
                        <span className="cross-btn">&#10006;</span>
                        <div className="sign-text">Signup</div>
                        </div>
                        
                        </div>
                   </div>
               </div>
            </div>
        );
    }
}
 
export default SignupModal;