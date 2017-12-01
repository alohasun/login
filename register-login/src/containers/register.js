import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputData } from '../actions';
import { bindActionCreators } from 'redux';

class registerForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            fullName:'',
            companyName:'',
            passWord:'',
            cPassWord:''
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.inputData(this.state);
        this.setState({
            email:'',
            fullName:'',
            companyName:'',
            passWord:'',
            cPassWord:''
        });  
    }
    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <input type="email" value={this.state.email} placeholder="Email" onChange={event=>this.setState({email:event.target.value})}/><br/>
                <input type="text"  value={this.state.fullName} placeholder="Full name" onChange={event=>this.setState({fullName:event.target.value})}/><br/>
                <input type="text"  value={this.state.companyName} placeholder="Company name" onChange={event=>this.setState({companyName:event.target.value})}/><br/>
                <input type="text" value={this.state.passWord} placeholder="Password" onChange={event=>this.setState({passWord:event.target.value})}/><br/>
                <input type="text" value={this.state.cPassWord} placeholder="Comfirm Password" onChange={event=>this.setState({cPassWord:event.target.value})}/><br/>
                <button type="submit">Register</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({inputData: inputData}, dispatch);
}

export default connect(null, mapDispatchToProps)(registerForm);