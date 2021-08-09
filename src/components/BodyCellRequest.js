import { Tabs, Typography } from "antd";
import { Row, Col } from "antd";
const { TabPane } = Tabs;
const { Title } = Typography;

export default function BodyCellRequest() {
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
            requestType
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
            string
          </Title>
          <Title
            level={5}
            style={{ color: "#5A5A5A", marginTop: "0", fontWeight: "400" }}
          >
            mandatory
          </Title>
        </Col>
        <Col span={12}>
          <Title
            level={5}
            style={{ color: "#5A5A5A", marginBottom: "0", fontWeight: "400" }}
          >
            This parameter is used to identify the transaction flow.<br/> Possible
            Values: 'Payment' for 'One time Payment' for all checkout<br/> flows
          </Title>
        </Col>
      </Row>
    </div>
  );
}
