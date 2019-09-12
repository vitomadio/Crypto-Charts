import React from 'react'
import { Link } from 'react-router-dom';

const Signup = React.forwardRef((props, ref) => (

    <div className="col-12 col-md-8 col-lg-6 col-xl-5" ref={ref} style={{ maxWidth: 500 }}>
        <h2 className="text-white text-center mb-1 mb-md-4 signup-title">Create new account.</h2>
        <div className="card p-4 shadow-sm" style={{ borderRadius: 10 }} ref={props.fromRef}>
            <form>
                <div className="row">
                    <div className="form-group form-group-md-lg col-12 col-md-6 mb-0">
                        <label htmlFor="name">Name</label>
                        <input
                            style={props.state.name.valid === false ? styles.disabled : null}
                            type="text"
                            className="form-control mb-2 mb-md-3 rounded-0"
                            placeholder="Name"
                            onChange={props.onChange.bind(this, 'name')}
                        />

                    </div>
                    <div className="form-group form-group-md-lg col-12 col-md-6 mb-0">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            style={props.state.lastName.valid === false ? styles.disabled : null}
                            type="email"
                            className="form-control mb-2 mb-md-3 rounded-0"
                            placeholder="Last Name"
                            onChange={props.onChange.bind(this, 'lastName')}
                        />
                    </div>
                </div>
                <div className="form-group form-group-md-lg ">
                    <label htmlFor="email">Email</label>
                    <input
                        style={props.state.email.valid === false ? styles.disabled : null}
                        type="email"
                        className="form-control mb-3 rounded-0"
                        placeholder="Email"
                        onChange={props.onChange.bind(this, 'email')}
                    />
                </div>
                <div className="form-group form-group-md-lg">
                    <label htmlFor="password">Password</label>
                    <input
                        style={props.state.password.valid === false ? styles.disabled : null}
                        type="password"
                        className="form-control mb-3 rounded-0"
                        placeholder="Password"
                        onChange={props.onChange.bind(this, 'password')}
                    />
                </div>
                <div className="form-group form-group-md-lg">
                    <label htmlFor="confirm">Confirm password</label>
                    <input
                        style={props.state.confirm.valid === false ? styles.disabled : null}
                        type="password"
                        className="form-control mb-3 rounded-0"
                        placeholder="Confirm password"
                        onChange={props.onChange.bind(this, 'confirm')}
                    />
                </div>

                <div className="btn btn-primary btn-block btn-lg rounded-0 float-right"
                    style={
                        props.state.name.valid === false ||
                            props.state.lastName.valid === false ||
                            props.state.email.valid === false ||
                            props.state.password.valid === false ||
                            props.state.confirm.valid === false ?
                            styles.btnDisabled : null
                    }
                    onClick={
                        props.state.name.valid === true &&
                            props.state.lastName.valid === true &&
                            props.state.email.valid === true &&
                            props.state.password.valid === true &&
                            props.state.confirm.valid === true ?
                            props.onCreateAccount : null
                    }
                >
                    Create account
                </div>
            </form>
        </div>
        <div className="row justify-content-center">
            <div className="ml-2 mt-2 col-auto">
                <Link className="text-white mr-4"
                    to={{ pathname: '/auth', state: { page: 'login' } }}
                    onClick={props.changeView('login')}
                >
                    I already have an account.
                    </Link>
            </div>
            <div className="col-auto">
                <Link className="text-white mr-4" to="">
                    Privacy Policy
                </Link>
            </div>
        </div>
    </div>
)
);

const styles = {
    disabled: {
        backgroundColor: '#FADBD8'
    },
    btnDisabled: {
        backgroundColor: '#7FBBFF',
        borderColor: '#7FBBFF'
    }
}

export default Signup;