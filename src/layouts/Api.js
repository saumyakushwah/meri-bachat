import { Layout } from "antd";
import ApiSection from "../components/ApiSection";
import ApiTabs from "../components/ApiTabs";
import Header from "../components/Header";

export default function Api() {
  return (
    <Layout className="layout">
      <Header />
      <ApiSection />
      <ApiTabs />
    </Layout>
  );
}
