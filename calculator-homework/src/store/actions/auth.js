import * as actionTypes from './actionTypes';
import * as firebase from 'firebase'
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};


export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime)

    }
}


export const auth = (email, password, isSignUp) => {
    let token = null;

    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        console.log(authData)
        if (isSignUp) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
                    console.log(response);
                    dispatch(authSuccess(response.data))
                })
                .catch(err => {
                    console.log(err);
                    dispatch(authFail(err))
                })
        }

        else if (!isSignUp) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(res => {
                    res.user.getIdToken().then(response => {
                        token = response;
                        dispatch(authSuccess(token, res.user.uid))


                    })


                    dispatch(checkAuthTimeout(3600000))


                })
                .catch(err => {
                    console.log(err.response);
                    dispatch(authFail(err))
                })
        }

    }
}