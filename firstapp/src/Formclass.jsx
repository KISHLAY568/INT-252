import React,{Component} from "react";

class Formclass extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
            formError:{}
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const {username,email,password,confirmPassword}=this.state;
        let errors={};
        if(!username){
            errors.username="Username is required";
        }
        if(!email){
            errors.email="Email is required";
        }
        if(!password){
            errors.password="Password is required";
        }
        if(!confirmPassword){
            errors.confirmPassword="Confirm Password is required";
        }
        if(password!==confirmPassword){
            errors.confirmPassword="Password and Confirm Password should be same";
        }
        this.setState({
            formError:errors
        })
        if(Object.keys(errors).length===0){
            alert("Form Submitted");
        }
    }
    render(){
        return(
            <div className="login-form-container">
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        {this.state.formError.username && <span>{this.state.formError.username}</span>}
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        {this.state.formError.email && <span>{this.state.formError.email}</span>}
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        {this.state.formError.password && <span>{this.state.formError.password}</span>}
                    </label>
                    <label>
                        Confirm Password:
                        <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
                        {this.state.formError.confirmPassword && <span>{this.state.formError.confirmPassword}</span>}
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}