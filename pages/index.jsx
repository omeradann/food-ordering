import Head from "next/head";
import Home from "./home/index";
import Header from "../components/layout/Header";

export default function Index() {
  return (
    <div>
    <Head>
      <title>Food Ordering</title>
      <div>
        <Header/>
        <Home />
        
      </div>
    </Head>
    </div>
  );
}
