import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { PostModelo } from "componentes/PostModelo";
import { PaginaPadrao } from "componentes/PaginaPadrao";

import { NaoEncontrado } from "pages/NaoEncontrada";

import posts from "json/posts.json";
import styles from "./Post.module.css";
import "./Post.css";
import { PostCard } from "componentes/PostCard";

export const Post = () => {
  const parametros = useParams();
  const post = posts.find((post) => post.id === Number(parametros.id));

  if (!post) {
    return <NaoEncontrado />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};
