import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter(
        (comments) => comments.campsiteId === parseInt(campsiteId)
    );
};