import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { Header, Footer } from "antd/lib/layout/layout";

function Contact() {
  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img
              src="https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Food"
              width="100px"
            />
          </div>

          <Menu
            className="Menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1">
              {" "}
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="2">
              {" "}
              <Link to="/itemlist">MENU</Link>
            </Menu.Item>
            <Menu.Item key="3">CONTACT US</Menu.Item>
          </Menu>
        </Header>
        <div className="contact" style={{ backgroundColor: "#4d6b64" }}>
          <div className="contain">
            <h1
              style={{
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                color: "brown",
              }}
            >
              <u>Contact Us</u>
            </h1>
            <p>" HAVE A QUESTION FOR US "</p>
            <div className="number">
              <p>
                E-MAIL :<u>hemalatha10198@gmail.com</u>
              </p>

              <br />
            </div>
          </div>
        </div>
        <Footer style={{ textAlign: "center" }}>
          MEAL BD ©2021 Created by Hemalatha k.
        </Footer>
      </Layout>
    </>
  );
}

export default Contact;
