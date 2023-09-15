import { PostModelo } from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMmim from "assets/sobre_mim_foto.jpg";
import styles from "./Sobremim.module.css";

export const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou a Diana Rose!</h3>

      <img
        className={styles.fotoSobreMim}
        src={fotoSobreMmim}
        alt="Foto da Diana"
      />
      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou desenvolvedora Front-end e estou feliz de te ver
        por aqui.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal do Rio de
        Janeiro (IFRJ), quando fiz o ensino médio integrado ao curso de
        eletrotécnica. Além das materias de elétrica, eu aprendi lógica de
        programação, o básico de Python, de C/C++ voltado para Arduino, HTML e
        CSS, mas sem aprofundar muito em cada uma delas. Eu tinha interesse em
        estudar programação, mas na época não fazia ideia de que trabalharia com
        isso hoje.
      </p>
      <p className={styles.paragrafo}>
        No ensino superior, escolhi cursar Ciência da Computação no Centro
        Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ). Lá
        eu consegui uma bolsa para pesquisa de extensão, realizada como uma
        forma de aplicação dos conhecimentos teóricos, sendo necessário estudo e
        pesquisa, de forma que essa aplicação impactasse positivamente a
        sociedade. Além disso, escrevi um artigo a respeito do tema.
      </p>
      <p className={styles.paragrafo}>
        Com isso tive meus primeiros contatos com JavaScript, com prazos de
        implementação para o site e para entrega do artigo.
      </p>
      <p className={styles.paragrafo}>
        No meu trabalho de conclusão de curso (TCC), decidi mergulhar no
        universo da educação digital e desenvolvi um jogo educacional.
        O objetivo desse projeto era ensinar crianças os fundamentos da
        programação de forma lúdica e envolvente. O jogo que criei não apenas
        introduz conceitos complexos de programação de maneira acessível, mas
        também proporciona uma experiência divertida e interativa, tornando o
        aprendizado uma aventura emocionante para as crianças.
      </p>
      <p className={styles.paragrafo}>
        Acredito que a educação é a chave para o futuro, e meu TCC representou
        um passo significativo na direção de tornar a tecnologia uma aliada no
        processo de ensino-aprendizagem, preparando as novas gerações para os
        desafios digitais que o mundo moderno oferece.
      </p>
    </PostModelo>
  );
};
