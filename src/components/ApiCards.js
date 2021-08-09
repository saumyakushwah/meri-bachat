import { Card, Typography } from "antd";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { Meta } = Card;

export default function ApiCards() {
  return (
    // <div
    //   style={{
    //     borderTop: "1px solid #E5E5E5",
    //     backgroundColor: "white",
    //     height: "900px",
    //     fontFamily: "Open sans, sans-serif",
    //     width: "100%",
    //   }}
    // >
    <div
      style={{
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // marginTop: "120px",
        margin: "0 16px",
      }}
    >
      <Card
        hoverable
        style={{
          width: 280,
          height: 400,
          paddingTop: "50px",
          borderRadius: "10px",
        }}
        cover={
          <img
            alt="example"
            src="/risk.png"
            width={61}
            height={61}
            style={{ objectFit: "contain" }}
          />
        }
      >
        <Meta
          description="Risk"
          style={{
            textAlign: "center",
            fontWeight: "600",
            fontSize: "15px",
            marginBottom: "10px",
          }}
        />
        <Title
          level={5}
          style={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}
        >
          Connected Risk API
        </Title>
        <Meta
          style={{ textAlign: "center", fontWeight: "400", fontSize: "11px" }}
          description="The Connected Risk API allows you to interact with the Connected Risk Platform without the need to open up the web browser and use the dashboard and other front end functionality. "
        />

        <Link to="/api">
          <Button
            style={{
              borderRadius: "20.5px",
              margin: "20px 0 20px 0px",
              float: "right",
              width: "130px",
              height: "40px",
              border: "none",
              boxShadow: "none",
              color: "#1D458A",
            }}
            className="api-btn"
          >
            View API
            <RightOutlined />
          </Button>
        </Link>
      </Card>
    </div>
    // </div>
  );
}

//           <Meta title="Connected Risk API" style={{ textAlign: "center", fontWeight: "400", fontSize: '11px'}} description="The Connected Risk API allows you to interact with the Connected Risk Platform without the need to open up the web browser and use the dashboard and other front end functionality. " />
