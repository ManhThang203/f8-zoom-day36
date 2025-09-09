import { useNavigate, useParams } from "react-router";
import styles from "./PostDetail.module.scss";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
function PostDetail() {
  const params = useParams(); // lấy ra Id của trang
  // khi muốn chuyển trang bằng đường dẫn
  // khi sử dụng navigate sẽ bị lịch sử trang
  const navigate = useNavigate();
  const [posts, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  // khi đường dãn thay đổi thì call api post có id
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/posts", {
            replace: true,
          });
          return;
        }
        return res.json();
      })
      .then((post) => {
        setPost(post);
      });
  }, [navigate, params.id]);
  // khi đường dãn thay đổi thì call api post có id commnets
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((res) => res.json())
      .then((comment) => setComments(comment));
  }, [params.id]);
  if (!posts) return <Loading />;
  return (
    <div className={styles.container}>
      <p>{posts.userId}</p>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <div className={styles.comment}>
        {comments.map((comment, index) => (
          <div key={index}>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PostDetail;
