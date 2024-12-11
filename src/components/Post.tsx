import classes from "./Post.module.css";
import { Link } from "react-router-dom";
import { Posts } from "../Interfaces";

const Post = (props: Posts) => {
 return (
  <li className={classes.post}>
   <Link to={`${props.id}`}>
    <div key={props.id}>
     <p className={classes.author}>{props.author}</p>
     <p className={classes.text}>{props.body}</p>
    </div>
   </Link>
  </li>
 );
};

export default Post;
