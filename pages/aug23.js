import Layout from "../components/layout";
import Head from "next/head";
import ReactPlayer from "react-player";

export default function Aug23() {
  return (
    <Layout>
      <Head>
        <title>Today's Work</title>
      </Head>
      <ReactPlayer url="https://youtu.be/g6hGVrFI3Jw" />
    </Layout>
  );
}
