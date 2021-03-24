import React from 'react';

export default class Login extends React.Component{
    state={
        email:'',
        pwd:'',
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.state.email=='marko.vitkovic@outlook.com' && this.state.pwd=='abcd')
            this.props.history.push('/orderlist')
    }
    render(){
    return (
        <div className='login'>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="mail">
                            <div class="input-div one">
                                <div class="i">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div>
                                    <input class="input" type='email' name='email' required onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="pass">
                            <div class="input-div two">
                                <div class="i">
                                    <i class="fas fa-lock"></i>
                                </div>
                                <div>
                                    <input class="input" type="password" name="pwd" required onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="onsub">
                            <button className="btn2 btn btn-secondary" type="submit">Log In</button>
                        </div>
                        <a className="note">Note: only the admin can log in</a>
                    </form>
                </div>
            </div>
    )
    }
}
