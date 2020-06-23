import React,{Component} from 'react';

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
	<div className="modal fade-scale" id="modal_sidebar">
		<div className="modal-dialog">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
					<h4 className="modal-title">Modal title</h4>
				</div>
				<div className="modal-body">
					<ul className="list-group">
						<li className="list-group-item">Item list</li>
						{/* <li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li>
						<li class="list-group-item">Item list</li> */}
					</ul>
				</div>

			</div>
		</div>
	</div>
            </div>
        );
    }
}
 
export default SignupModal;