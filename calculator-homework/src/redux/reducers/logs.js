import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../../store/utility';

const initialState = {
    logs: [],
    loading: false
};


const fetchLogsStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchLogsSuccess = (state, action) => {
    return updateObject(state, {
        logs: action.logs,
        loading: false
    });
};

const fetchLogsFail = (state, action) => {
    return updateObject(state, { loading: false });
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LOGS_START: return fetchLogsStart(state, action);
        case actionTypes.FETCH_LOGS_SUCCESS: return fetchLogsSuccess(state, action);
        case actionTypes.FETCH_LOGS_FAIL: return fetchLogsFail(state, action);
        default: return state;
    }
};
export default reducer;