import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import style from "./Posts.module.scss";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";

function Posts() {
  const [searchParams, setSearchParams] = useSearchParams(); // khi muốn chuyển id lên đường dãn
  const [page, setPage] = useState(() => +searchParams.get("page") || 1);
  const [posts, setPost] = useState(null);

  // khi page thay đổi thì useEffect hoạt động và gọi call api path
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, [page]);

  useEffect(() => {
    setSearchParams(page <= 1 ? "" : { page });
  }, [page, setSearchParams]);
  // xử lý khi bấm thay đổi active các nút khi chuyển trang
  const handleOnPageChange = (newPage) => {
    setPage(newPage);
  };

  if (!posts) return <Loading />;
  return (
    <nav className={style.nav}>
      <h1>New post</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={`/posts/${post.id}`}>
              {post.id}.{post.title}
            </Link>
          </li>
        ))}
      </ul>
      <section className={style.pagination}>
        <h2>Page</h2>
        <Pagination
          firstPage={1}
          currentPage={page}
          totalPages={5}
          onPageChange={handleOnPageChange}
        />
      </section>
    </nav>
  );
}
export default Posts;
