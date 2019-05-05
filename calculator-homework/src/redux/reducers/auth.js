import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../../store/utility';
import * as firebase from 'firebase'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
}

const authStart = (state, action) => {
    return updateObject(state, { error: null, loading: true })
}
const authSuccess = (state, action) => {
    console.log(action);
    return updateObject(state, {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    })
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    console.log('logout')
    // return updateObject(state, {
    //     token: null,
    //     userId: null
    // })
    return firebase.auth().signOut().then(function () {
        window.location.reload()
    }, function (error) {
        console.error('Sign Out Error', error);
    });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action)
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action)
        case actionTypes.AUTH_FAIL:
            return authFail(state, action)

        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action)


        default:
            return state;
    }
}

export default reducer;