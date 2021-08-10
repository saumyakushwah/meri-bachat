import { Row, Col, Typography } from "antd";

const { Title } = Typography;

export default function Banner() {
  return (
    <Row className="tool-section" justify="space-around" align="middle">
      <Col xs={{ span: 24 }} sm={{ span: 4 }}></Col>
      <Col xs={{ span: 18 }} sm={{ span: 6 }}>
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
      <Col xs={{ span: 24 }} sm={{ span: 1 }}></Col>
      <Col xs={{ span: 20 }} sm={{ span: 9 }}>
        <br />
        <Row justify="space-around">
          <Col span={6}>
            <img
              src="/RIC.png"
              alt=""
              width="100%"
              // style={{ objectFit: "contain" }}
              // height={75}
              className="tool-image"
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
              className="tool-image"
              // style={{ objectFit: "contain" }}
              // height={75}
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
              className="tool-image"
              // style={{ objectFit: "contain" }}
              // height={75}
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
      <Col xs={{ span: 24 }} sm={{ span: 4 }}></Col>
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
