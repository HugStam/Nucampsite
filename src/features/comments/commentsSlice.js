import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';


const initialState ={
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'commment',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.campsites.campsitesArray.filter(
        (comments) => comments.campsiteId === parseInt(campsiteId)
    );
};