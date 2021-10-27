import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Input, Space, message, Card } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Footer } from "antd/lib/layout/layout";
import "./Fetch.css";

const { Search } = Input;

function Fetch() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    searchMeal("a");
  }, []);

  const searchMeal = (meal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;
    axios.get(url).then((res) => {
      if (res.data.meals !== null) {
        console.log(res.data);
        setMeals(res.data.meals);
      } else {
        message.error("Food is not found");
      }
    });
  };
  const onSearch = (value) => {
    searchMeal(value);
  };
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
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1"> HOME</Menu.Item>
            <Menu.Item key="2">
              {" "}
              <Link to="/itemlist">MENU</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact"> CONTACT US </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <div className="search">
          <div className="header">
            {" "}
            <h1>Welcome to TheMeal</h1>{" "}
            <p
              style={{ color: "#e6872e", fontSize: "20px", fontWeight: "bold" }}
            >
              "Out of passion for providing hygienic, quality and tasty food,
              cooked to perfection. <br />
              TVK has professional Chefs, who have innate love for cooking and
              have worked and gained experience in the star hotels"
            </p>
          </div>

          <Space
            direction="vertical"
            style={{ width: "40%", padding: "2%", margin: "30px" }}
          >
            <Search
              placeholder="Search for a Meal..."
              onSearch={onSearch}
              enterButton
            />
          </Space>
        </div>
        <h2>Hygienic Meals</h2>
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
                      alt={meal.strMeal}
                      src={meal.strMealThumb}
                      height="300"
                    />
                  }
                >
                  <div className="title">
                    <Link to={`/detail/${meal.idMeal} `}>{meal.strMeal} </Link>
                  </div>
                </Card>
              );
            })}
        </div>
        <Footer style={{ textAlign: "center" }}>
          MEAL BD ©2021 Created by Hemalatha k.
        </Footer>
      </Layout>
    </>
  );
}

export default Fetch;
