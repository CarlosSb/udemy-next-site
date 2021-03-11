import Head from "next/head";
import Image from "next/image";
const Hello = () => (
  <>
    <Head>
      <title>Hello there :: My Blog</title>
      <meta property="og:title" content="Hello there :: My Blog" />
    </Head>

    <article>
      <h1>Hello there</h1>
      <Image src="/post/hello-there/aranha.jpg" width={640} height={427} />
      <p>
        Imagem focal do empilhamento de uma pequena aranha (Foto: avier
        Ruperez/Nikon Small World)
      </p>
    </article>
  </>
);

export default Hello;
