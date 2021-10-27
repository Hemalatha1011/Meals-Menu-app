import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Itemlist.css";
import { Layout, Menu, Typography } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header, Footer } from "antd/lib/layout/layout";

const { Title } = Typography;

function Detail(props) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    let url = props.match.url;
    let id = url.slice(8);

    console.log(id);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setMeals(res.data.meals);
        // console.log(res);
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

          <Menu className="Menu" theme="dark" mode="horizontal">
            <Menu.Item key="1">
              {" "}
              <Link to="/">HOME</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/itemlist">MENU</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contact"> CONTACT US </Link>
            </Menu.Item>
          </Menu>
        </Header>

        <div className="image">
          {meals !== null ? (
            <>
              {meals.map((meal) => {
                return (
                  <>
                    <div className="img">
                      <h1> {meal.strMeal}</h1>
                      <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        width="50%"
                        height="300px"
                      />
                    </div>
                    <div className="describe">
                      <h3>
                        <Title level={5} style={{ margin: "1%" }}>
                          <span style={{ color: "brown" }}> Food-Category</span>
                          :- {meal.strCategory}{" "}
                          <span style={{ color: "brown", paddingLeft: "2%" }}>
                            {" "}
                            Country{" "}
                          </span>
                          :- {meal.strArea}
                        </Title>
                      </h3>
                      <div className="ingredient_list">
                        <h3>
                          <u>Ingredient for {meal.strMeal}</u>
                        </h3>
                        <Title level={4}>
                          {meal.strIngredient1},{meal.strIngredient2},
                          {meal.strIngredient3},{meal.strIngredient4},
                          {meal.strIngredient5},{meal.strIngredient6},
                          {meal.strIngredient7},{meal.strIngredient8},
                          {meal.strIngredient9},{meal.strIngredient10},
                          {meal.strIngredient11},{meal.strIngredient12},
                          {meal.strIngredient13},{meal.strIngredient14},
                          {meal.strIngredient15},{meal.strIngredient16},
                          {meal.strIngredient17},{meal.strIngredient18},
                          {meal.strIngredient19},{meal.strIngredient20}
                        </Title>
                      </div>
                      <div className="ingredient_list">
                        <h3>
                          <u>Instructions for {meal.strMeal}</u>
                          <Title level={4}>{meal.strInstructions}</Title>
                        </h3>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <p>Meals detail not found</p>
          )}{" "}
        </div>

        <Footer style={{ textAlign: "center" }}>
          MEAL BD ©2021 Created by Hemalatha k.
        </Footer>
      </Layout>
    </>
  );
}

export default Detail;
