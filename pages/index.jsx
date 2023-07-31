import Head from "next/head";
import Home from "./home/index";
import Header from "../components/layout/Header";
import Topsection from "@/components/layout/Topsection";

export default function Index() {
  return (
    <div>
    <Head>
      <title>Food Ordering</title>
      <div>
        <Header/>
        <Topsection/>
        <Home />
        
        
      </div>
    </Head>
    </div>
  );
}
