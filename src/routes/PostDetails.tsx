import { useLoaderData, Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
 const post = useLoaderData();

 if (!post) {
  return (
   <Modal>
    <main className={classes.details}>
     <h1>포스트를 찾을 수 없습니다.</h1>
     <p>요쳥하신 포스트를 찾을 수 없습니다.</p>
     <p>
      <Link to=".." className={classes.btn}>
       Okay
      </Link>
     </p>
    </main>
   </Modal>
  );
 }
 return (
  <Modal>
   <main className={classes.details}>
    <p className={classes.author}>{post.author}</p>
    <p className={classes.text}>{post.body}</p>
   </main>
  </Modal>
 );
}
export default PostDetails;

export async function loader({ params }: { params: { id: number } }) {
 const response = await fetch(`http://localhost:8080/posts/${params.id}`);
 const resData = await response.json();
 return resData.post;
}
