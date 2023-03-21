import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Chroma AI" />
        <meta
          name="description"
          content="Write about how your current mood, the lyrics of your favorite song, or even a random thought that popped into your head — AI will do the rest."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chroma.szhao.dev/" />
        <meta property="og:title" content="Chroma AI" />
        <meta
          property="og:description"
          content="Write about how your current mood, the lyrics of your favorite song, or even a random thought that popped into your head — AI will do the rest."
        />
        <meta
          property="og:image"
          content="https://chroma.szhao.dev/chroma-preview.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chroma.szhao.dev/" />
        <meta property="twitter:title" content="Chroma AI" />
        <meta
          property="twitter:description"
          content="Write about how your current mood, the lyrics of your favorite song, or even a random thought that popped into your head — AI will do the rest."
        />
        <meta
          property="twitter:image"
          content="https://chroma.szhao.dev/chroma-preview.png"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
