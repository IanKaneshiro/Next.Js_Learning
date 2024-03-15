import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts, getUsers } from "../../lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   } else {
//     return res.json();
//   }
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  const posts = await getPosts();
  const users = await getUsers();
  console.log(posts, users);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
