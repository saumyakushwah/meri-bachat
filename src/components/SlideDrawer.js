import React from "react";
import { Drawer, Button } from "antd";
import { Typography } from "antd";
import { Row, Col } from "antd";
import { Switch } from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
const { Title } = Typography;

class SlideDrawer extends React.Component {
  state = { visible: true };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  toggle = () => {
    this.setState((prev) => ({
      ...prev,
      visible: !prev.visible,
    }));
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          background: "#030303",
          width: "500px",
          height: this.state.visible ? "80vh" : "72px",
          borderRadius: "16px 0 0 0",
          zIndex: 99,
          transition: "all .8s ease",
        }}
        className="site-drawer-render-in-current-wrapper"
      >
        {/* <Drawer
          placement="bottom"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ transform: `translateY(-50%)` }}
        > */}
        {/* <div style={{ marginTop: 16 }}>
          <Button type="primary" onClick={this.showDrawer}>
            Open
          </Button>
        </div> */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "72px",
            padding: "0 32px",
            cursor: "pointer",
          }}
          onClick={this.toggle}
        >
          {this.state.visible ? (
            <DownOutlined style={{ fontSize: "24px", color: "white" }} />
          ) : (
            <UpOutlined style={{ fontSize: "24px", color: "white" }} />
          )}
        </div>

        <div style={{ padding: "16px" }}>
          <Row justify="center">
            <Col
              span={9}
              style={{
                fontWeight: "600",
                fontSize: "16px",
                textAlign: "center",
                color: "white",
              }}
            >
              Staging
            </Col>
            <Col
              span={9}
              style={{
                fontWeight: "600",
                fontSize: "16px",
                color: "#5A5A5A",
                textAlign: "center",
              }}
            >
              Production
            </Col>
            <Col
              span={24}
              style={{
                // fontWeight: "600",
                // fontSize: "16px",
                // color: "#5A5A5A",
                textAlign: "center",
              }}
            >
              <Switch
                size="default"
                checkedChildren="Request"
                unCheckedChildren="Response"
                defaultChecked
                className="switch"
                style={{ margin: "24px" }}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default SlideDrawer;
