import { SearchOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
const { Search } = Input;
const { Header: AntHeader } = Layout;

const onSearch = (value) => console.log(value);

export default function Header() {
  const [active, setActive] = useState(0);

  let right = 0;
  let width = 0;

  switch (active) {
    case 0:
      right = 386;
      width = 329;
      break;
    case 1:
      right = 266;
      width = 74;
      break;
    default:
      break;
  }

  return (
    <>
      <style jsx>{`
        .ant-input-search-button {
          color: ${active === 0 ? "white" : "#1d458a"} !important;
        }
      `}</style>
      <AntHeader
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "white",
          zIndex: 99,
        }}
      >
        {/* <div>HI</div> */}
        <Link to="/">
          <img className="logo" src="/MB_logo.png" alt="logo" />
        </Link>
        {/* <SearchOutlined
        style={{
          fontSize: "24px",
          padding: "20px",
          background: "#1D458A",
          borderRadius: "26px",
          width: "280px",
          height: "40px",
          color: "white",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          margin: "0 0 0 530px"
        }}
      /> */}
        <div className="nav-links">
          <Search
            onClick={() => setActive(0)}
            size="large"
            className="search-bar"
            onSearch={onSearch}
            // enterButton
          />
          <Link onClick={() => setActive(1)} to="/dev">
            <span
              className="ant-dropdown-link"
              style={{ color: active === 1 ? "white" : "#495057" }}
            >
              APIs
            </span>
          </Link>
          <span className="ant-dropdown-link">UseCases</span>
          <span className="ant-dropdown-link">Tools</span>
          <span className="ant-dropdown-link">Login</span>
          <div
            className="backdrop"
            style={{ right: `${right}px`, width: `${width}px` }}
          ></div>
        </div>
      </AntHeader>
      <div className="blank-space" />
    </>
  );
}
