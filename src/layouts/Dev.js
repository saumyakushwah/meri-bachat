import { Layout } from "antd";
import ApiCards from "../components/ApiCards";
import ApiMainSection from "../components/ApiMainSection";
import Header from "../components/Header";

export default function Dev() {
  return (
    <Layout className="layout">
      <Header />
      <ApiMainSection />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "64px",
          borderTop: "1px solid #e5e5e5",
          background: "white",
        }}
      >
        <ApiCards />
        <ApiCards />
        <ApiCards />
      </div>
    </Layout>
  );
}
