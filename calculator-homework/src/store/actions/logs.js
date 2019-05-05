import * as actionTypes from './actionTypes';
import { database } from '../../config/firebase';


export const fetchLogsSuccess = (logs) => {
    return {
        type: actionTypes.FETCH_LOGS_SUCCESS,
        logs: logs
    };
};

export const fetchLogsFail = (error) => {
    return {
        type: actionTypes.FETCH_LOGS_FAIL,
        error: error
    };
};

export const fetchLogsStart = () => {
    return {
        type: actionTypes.FETCH_LOGS_START
    };
};



// export const fetchLogs = (token) => {
//     console.log('mtav')
//     return dispatch => {
//         dispatch(fetchLogsStart());
//         ordersRef.on("value", res => {
//             console.log(res)

//             const fetchedLogs = [];
//             for (let key in res.data) {
//                 fetchedLogs.push({
//                     ...res.data[key],
//                     id: key
//                 });
//             }
//             dispatch(fetchLogsSuccess(fetchedLogs));
//             console.log(fetchedLogs)
//         })

//     };
// };


////////propblem is here
export const fetchLogs = (token) => {
    return dispatch => {
        dispatch(fetchLogsStart());
        database.ref('logs').once("value")
            .then(res => {
                console.log(res.val())
                // const fetchedLogs = [];
                // console.log(fetchedLogs)

                let result = res.val();
                console.log(result)
                var logs = Object.values(JSON.parse(JSON.stringify(result)))
                // for (let key in result) {
                //     fetchedLogs.push({

                //         id: key,
                //         time: result.time,
                //         value: result.value
                //     });
                // }
                dispatch(fetchLogsSuccess(logs));
            })

    };
};