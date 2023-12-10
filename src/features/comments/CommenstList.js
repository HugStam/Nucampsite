import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from  './CommentForm'

const CommentsList =({campsiteId}) => {
    const comment = selectCommentsByCampsiteId(campsiteId)

    if (comment && comment.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comment.map((comment) => {
                    return <Comment key={comment.id} comment={comment} />
                })}
                <CommentForm campsiteId={campsiteId}/>
            </Col>

        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    )

};

export default CommentsList;