import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <section className="Home">
    <Head>
      <title>DMR Home</title>
    </Head>
    <div>Hello world</div>
  </section>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;
