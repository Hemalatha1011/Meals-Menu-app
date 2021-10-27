import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { Layout, Menu, Spin, Card } from "antd";
import { Link } from "react-router-dom";
import { Header, Footer } from "antd/lib/layout/layout";
import "./Itemlist.css";

const { Meta } = Card;
function Itemlist() {
  const [meals, setMeals] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setMeals(response.data.categories);
        setLoading(false);
      });
  }, []);
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
            defaultSelectedKeys={["2"]}
          >
            <Menu.Item key="1">
              {" "}
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="2"> MENU</Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact"> CONTACT US </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <div className="list">
          {loading === true ? (
            <div style={{ height: "100vh", width: "100%" }}>
              <Spin tip="Loading..." style={{ margin: "20% 50%" }} />
            </div>
          ) : (
            <div className="Randomlist">
              <h1 className="lists">
                <u>Random List Of Categories</u>
              </h1>

              <div className="card">
                {meals &&
                  meals.map((meal, index) => {
                    return (
                      <Card
                        className="card-inner"
                        key={index}
                        hoverable
                        style={{ width: 240, marginBottom: "20px" }}
                        cover={
                          <img
                            alt={meal.strCategory}
                            src={meal.strCategoryThumb}
                            height="300"
                          />
                        }
                      >
                        <div className="title">
                          <Meta title={meal.strCategory} />
                        </div>
                      </Card>
                    );
                  })}
              </div>
            </div>
          )}
        </div>

        <Footer style={{ textAlign: "center" }}>
          MEAL BD ©2021 Created by Hemalatha k.
        </Footer>
      </Layout>
    </>
  );
}

export default Itemlist;
