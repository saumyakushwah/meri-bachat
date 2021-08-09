import { Layout } from "antd";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MainSection from "../components/MainSection";

export default function Home() {
  return (
    <Layout className="layout">
      <Header />
      <MainSection />
      <Banner />
    </Layout>
  );
}
