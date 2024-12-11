import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";
import { Posts } from "../Interfaces";

function PostList() {
 const posts = useLoaderData() as Posts[];

 return (
  <>
   {posts.length > 0 && (
    <ul className={classes.posts}>
     {posts.map((post) => (
      <Post key={post.id} id={post.id} author={post.author} body={post.body} />
     ))}
    </ul>
   )}
   {posts.length === 0 && (
    <div className={classes.loading}>
     <p>Loading...</p>
    </div>
   )}
  </>
 );
}

export default PostList;
