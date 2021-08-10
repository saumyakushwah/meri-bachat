import { Row, Col, Divider, Typography, Input } from "antd";

const { Title } = Typography;

export default function MainSection() {
  return (
    <div className="main-section">
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} className="left-section">
          <div className="container-div">
            <Title
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                fontFamily: "'Open Sans', sans-serif",
              }}
            >
              Lorem Ipsum
            </Title>
            <Title
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "26px",
                fontFamily: "'Open Sans', sans-serif",
              }}
              level={5}
            >
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            </Title>
            {/* <div style={{borderRadius: '24px', width: '380px', backgroundColor:'#F5F5F5', height: '50px', margin: '28px 0 0 0'}}></div> */}
            <Input className="main-input" />
          </div>
        </Col>
        <Col flex={3} className="right-section">
          <img src="/Discuss.png" alt="" className="main-image" />
        </Col>
      </Row>
    </div>
  );
}
