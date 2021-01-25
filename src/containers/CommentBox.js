import React, {useState} from 'react';
import CommentList from '../components/CommentList';

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
    return(
        <>
        <h1> I am a comment</h1>
        <CommentList comments={comments}></CommentList>
        </>
    )
}


export default CommentBox;