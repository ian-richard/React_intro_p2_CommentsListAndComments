import React, {useState} from 'react';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const CommentBox = () => {

    const[comments, setComments] = useState(
    [
        {
            id: 1,
            author: "Rick Henry",
            text: "React is awesome!"
        },
        {
            id: 2,
            author: "John Harper",
            text: "I'm dreaming in React"
        }
    ]
    );

    const addComment = (timeOfComment) => {
        timeOfComment.id = Date.now();
        const updateComments = [... comments, timeOfComment];
        setComments(updateComments);
    }

    return(
        <>
        <h1> I am a comment</h1>
        <CommentList comments={comments}></CommentList>
        <h2>Add a comment:</h2>
        <CommentForm onCommentSubmit={(comment) => addComment(comment)}></CommentForm>
        </>
    )
}


export default CommentBox;