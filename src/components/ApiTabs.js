import { Tabs, Typography } from "antd";
import { Row, Col } from "antd";
import BodyCell from "./BodyCell";
import BodyCellRequest from "./BodyCellRequest";
import Cell from "./Cell";
import CellVersion from "./CellVersion";
import SlideDrawer from "./SlideDrawer";
const { TabPane } = Tabs;
const { Title } = Typography;

export default function ApiTabs() {
  return (
    <div className="card-container">
      <Tabs
        defaultActiveKey="1"
        type="card"
        style={{
          height: "1700px",
          fontWeight: "light",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "14px",
          borderRadius: "20px 20px 0 0",
        }}
      >
        <TabPane disabled></TabPane>
        <TabPane
          tab="Overview"
          key="1"
          style={{ height: "900px", padding: "80px" }}
        >
          <p>
            The Connected Risk API allows you to interact with the Connected
            Risk Platform without the need to open up <br />
            the web browser and use the dashboard and other front end
            functionality. <br /> <br />
            <br />
            The Connected Risk Platform includes a set of tools you can use to
            configure the Audit Management, Compliance <br />
            Management, Model Risk Management, Policy Management, Risk
            Management and Regulatory Change
            <br />
            Management products. These products allow you to manage your risk
            incidents from capture to closure, record <br />
            related issues, share information and analysis, and provide an audit
            trail with supporting documentation. <br />
            <br />
            <br />
            The Connected Risk Platform provides you with: <br />
            <br />
            <br />a uniform view of risk processes <br />
            effective workflow interaction
            <br /> streamlining of data from legacy solutions
            <br /> a flexible data model <br />
            customization to your specific needs
            <br /> Using the Connected Risk API you will be able to: <br />
            <br />
            <br />
            Log in and out of the Connected Risk Platform. <br />
            Locate and retrieve users' details. <br />
            Locate and work with nodes, instances and links.
            <br />
            Work with teams, metrics and time periods. <br />
            Initiate and apply workflows. <br />
            Retrieve and work with attachments in the Connected Risk database.
            <br /> The Connected Risk API covers the basic functionality of the
            Connected Risk application and can be used in <br />
            conjunction with all of the Connected Risk Solutions.
          </p>
        </TabPane>
        <TabPane
          tab="Quickstart"
          key="2"
          style={{ height: "2400px", padding: "80px" }}
        >
          <Title level={4} style={{ color: "#5A5A5A" }}>
            Use Case
          </Title>
          <p>
            To start transaction for native flow, merchant need to first call
            this api and this api will return the txn
            <br /> Token which will be used in all the other native APIs.
          </p>
          <br />
          <br />
          <br />
          <Title level={4} style={{ color: "#5A5A5A" }}>
            Request Attributes
          </Title>
          <p>
            To start transaction for native flow, merchant need to first call
            this api and this api will return the txn
            <br /> Token which will be used in all the other native APIs.
          </p>
          <br />
          <br />
          <br />
          <Title level={3} style={{ color: "#1D458A", fontWeight: "bold" }}>
            Head
          </Title>
          <Cell />
          <CellVersion />
          <CellVersion />
          <CellVersion />
          <br />
          <br />
          <Title level={3} style={{ color: "#1D458A", fontWeight: "bold" }}>
            Body
          </Title>
          <BodyCell />
          <BodyCellRequest />
          <BodyCellRequest />
          <BodyCellRequest />
          <SlideDrawer
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "right",
              borderRadius: "8px",
            }}
          />
        </TabPane>
        <TabPane tab="Documentation" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
        <TabPane tab="Downloads" key="4">
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
          <p>Content of Tab Pane 4</p>
        </TabPane>
      </Tabs>
    </div>
  );
}
