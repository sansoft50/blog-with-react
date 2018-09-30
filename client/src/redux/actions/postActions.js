import actions from '../actionTypes/actionTypes';
import apiCall from '../../services/apiCall';

export const getAllPosts = () => {
    return dispatch => {

        dispatch(postsApiCallStart());

        apiCall('posts')
            .then(data => {
                dispatch(postsApiCallSuccess());
                dispatch(getPosts(data));
            })
            .catch(err => {
                dispatch(postsApiCallFailure());
            })

    };
}

export const getPosts = (posts) => {

    return {
        type: actions.GET_POSTS,
        payload: { posts },
    };
};

export const postsApiCallStart = () => {
    return {
        type: actions.GET_POSTS_AJAX_CALL_START,
    };
};

export const postsApiCallSuccess = () => {
    return {
        type: actions.GET_POSTS_AJAX_CALL_SUCCESS,
    };
};

export const postsApiCallFailure = () => {
    return {
        type: actions.GET_POSTS_AJAX_CALL_FAILURE,
    };
};

export const addNewPost = (body) => {
    return dispatch => {

        dispatch(addPostApiCallStart());

        apiCall(`post`, 'POST', body)
            .then(() => {

                dispatch(addPostApiCallSuccess());
                dispatch(getAllPosts());

            })
            .catch(error => {

                dispatch(addPostApiCallFailure());

            });
    };
};

export const addPostApiCallStart = () => {
    return {
        type: actions.ADD_POST_AJAX_CALL_START
    };
};

export const addPostApiCallSuccess = () => {
    return {
        type: actions.ADD_POST_AJAX_CALL_SUCCESS
    };
};

export const addPostApiCallFailure = () => {
    return {
        type: actions.ADD_POST_AJAX_CALL_FAILURE
    };
};
