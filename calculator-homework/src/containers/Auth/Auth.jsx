import React, { Component } from 'react';
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux';
import Input from "../../components/inputs/input";
import Button from "../../components/buttons/button";
import NavigationItems from '../../components/Navigation/NavigationItems';
import Spinner from '../../components/UI/Spinner/Spinner'
class Auth extends Component {
    state = {
        controls: {
            email: {
                id: "0",
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: "Your Email"
                },
                value: '',
                // validation: {
                //     required: true,
                //     isEmail: true
                // },
                // valid: false,
                // touched: false
            },
            password: {
                id: "1",
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: "Your Password"
                },
                value: '',
                // validation: {
                //     required: true,
                //     minLength: 6
                // },
                // valid: false,
                // touched: false
            }
        },
        isSignUp: true
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp)
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignUp: !prevState.isSignUp }
        })
    }

    emailInputChanged = (event) => {
        const input = {
            ...this.state.controls.email
        }
        input.value = event.target.value;
        this.setState({
            ...this.state.controls,
            controls: {
                email: input,
                password: {
                    ...this.state.controls.password
                }

            }
        })
    }
    passwordInputChanged = (event) => {
        const input = {
            ...this.state.controls.password
        }
        input.value = event.target.value;
        this.setState({
            ...this.state.controls,
            controls: {
                email: {
                    ...this.state.controls.email
                },
                password: input

            }
        })
    }
    render() {

        // const formElementsArray = [];
        // for (let key in this.state.controls) {
        //     formElementsArray.push({
        //         id: key,
        //         config: this.state.controls[key]
        //     })
        // }

        // const form = formElementsArray.map(formElement => (
        //     <Input
        //         key={formElement.id}
        //         elementType={formElement.config.elementType}
        //         elementConfig={formElement.config.elementConfig}
        //         value={formElement.config.value}
        //         invalid={!formElement.config.valid}
        //         shouldValidate={formElement.config.validation}
        //         touched={formElement.config.touched}
        //         changed={(event) => this.inputChangedHandler(event, formElement.id)} />
        // ))
        let form = <form onSubmit={this.onSubmitHandler}>
            {/* {form} */}

            <Input type={this.state.controls.email.elementConfig.type} placeholder={this.state.controls.email.elementConfig.placeholder} changed={this.emailInputChanged} value={this.state.controls.email.value} /><br />
            <Input type={this.state.controls.password.elementConfig.type} placeholder={this.state.controls.password.elementConfig.placeholder} changed={this.passwordInputChanged} value={this.state.controls.password.value} /><br />
            <Button value="SUBMIT" />


        </form>;

        let sign = "SWITCH TO " + (this.state.isSignUp ? "SIGN-IN" : "SIGN-UP")

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }
        return (
            <div>
                <nav>
                    <NavigationItems />
                </nav>
                {errorMessage}
                <div className='signUp'>
                    {form}

                    <Button
                        clicked={this.switchAuthModeHandler}
                        value={sign} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);