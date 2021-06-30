import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="keywords" content={keywords}></meta>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev News",
  keywords: "web development, programming",
  description: "Get the latest news in web dev",
};

export default Meta;
