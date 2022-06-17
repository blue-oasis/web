import React from "react";
import Comment from "./comment";

const comments = [
    {
        name: "이인제",
        comment: "안녕하세요",
    },
    {
        name: "홍길동",
        comment: "반가워요",
    },
    {
        name: "강민경",
        comment: "네^^",
    },
];


function CommentList(props) {
    return (
        <div>
           {comments.map((comment) => {
            return (
                <Comment name={comment.name} comment={comment.comment} />
            );
           })}
        </div>
    );
}

export default CommentList;