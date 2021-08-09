import { Row, Col, Typography } from "antd";

const { Title } = Typography;

export default function Banner() {
  return (
    <Row style={{ height: "300px" }} justify="space-around" align="middle">
      <Col span={4}></Col>
      <Col span={6}>
        <Row justify="space-around" align="middle">
          <Col>
            <Title className="banner-heading">Developer Tools</Title>
            <Title className="banner-sub-heading" level={5}>
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem
              Ipsum
            </Title>
          </Col>
        </Row>
      </Col>
      <Col span={2}></Col>
      <Col span={8}>
        <br />
        <Row justify="space-around">
          <Col span={6}>
            <img
              src="/RIC.png"
              alt=""
              width="100%"
              style={{ objectFit: "contain" }}
              height={75}
            />
            <Title level={5} className="tools-title">
              RIC Search
            </Title>
          </Col>
          <Col span={6}>
            <img
              src="/discovery.png"
              alt=""
              width="100%"
              style={{ objectFit: "contain" }}
              height={75}
            />
            <Title level={5} className="tools-title">
              Data Model
              <br />
              Discovery
            </Title>
          </Col>
          <Col span={6}>
            <img
              src="/explore-tool.png"
              alt=""
              width="100%"
              style={{ objectFit: "contain" }}
              height={75}
            />
            <Title level={5} className="tools-title">
              Data Exploration
              <br />
              Tool
            </Title>
          </Col>
        </Row>
        {/* <div className="developer-tools">
          <div className="tools-comp">
            
          </div>
          <div className="tools-comp">
            
          </div>
          <div className="tools-comp">
            
          </div>
        </div> */}
      </Col>
      <Col span={4}></Col>
    </Row>
    // <div className="banner">
    // {/* <Row>
    //   <Col flex={2}>
    //   </Col>
    //   <Col flex={3}>
    //   </Col>
    // </Row> */}
  );
}
