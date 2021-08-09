import { Tabs, Typography } from "antd";
import { Row, Col } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;

export default function CellVersion() {
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        borderBottom: "2px solid #fff",
        padding: "16px 0 10px 40px",
      }}
    >
      <Row>
        <Col span={6}>
          <Title
            level={5}
            style={{ color: "#1D458A", marginBottom: "0", fontWeight: "600" }}
          >
            Version
          </Title>
          <Title
            level={5}
            style={{
              color: "#5A5A5A",
              marginTop: "0",
              marginBottom: "0",
              fontWeight: "400",
            }}
          >
            Strings
          </Title>
          <Title
            level={5}
            style={{ color: "#5A5A5A", marginTop: "0", fontWeight: "400" }}
          >
            Optional
          </Title>
        </Col>
        <Col span={12}>
          <Title
            level={5}
            style={{ color: "#5A5A5A", marginBottom: "0", fontWeight: "400" }}
          >
            Version of the API
          </Title>
          <Title
            level={5}
            style={{ color: "#5A5A5A", marginTop: "0", fontWeight: "400" }}
          >
            Example: V1
          </Title>
        </Col>
      </Row>
    </div>
  );
}
