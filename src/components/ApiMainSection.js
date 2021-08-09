import { Row, Col, Divider, Typography, Input } from "antd";

const { Title } = Typography;

export default function ApiMainSection(){
  return(
    <div className="main-section">
      <Row>
        <Col flex={3} className="left-section">
          <Title
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              fontFamily: "'Open Sans', sans-serif",
              marginBottom: '0'
            }}
          >
            Lorem Ipsum
          </Title>
          <Title
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "26px",
              fontFamily: "'Open Sans', sans-serif",
              marginTop: '0.5rem'
            }}
            level={5}
          >
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            <br />
            Lorem Ipsum Lorem Ipsum Lorem Ipsum{" "}
          </Title>
          <Title style={{fontWeight: '600', fontSize: '20px', marginTop: '150px'}} level={3}>Developer Tools</Title>
          {/* <div style={{borderRadius: '24px', width: '380px', backgroundColor:'#F5F5F5', height: '50px', margin: '28px 0 0 0'}}></div> */}
          {/* <Input
            style={{
              width: "380px",
              height: "50px",
              borderRadius: "24px",
              margin: "20px 0 0 0",
              backgroundColor: "#F5F5F5",
              border: "1px solid #F5F5F5",
              color: "black",
              fontSize: "24px",
              padding: "24px",
            }}
          /> */}
        </Col>
        <Col flex={2} className="right-section">
          <img
            src="/person-reading.png"
            alt=""
            width={344}
            height={344}
            style={{ objectFit: "contain" }}
          />
        </Col>
      </Row>
    </div>
  )
}