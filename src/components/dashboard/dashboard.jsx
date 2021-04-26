import AuthContext from "./../../auth/AuthContext";
import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Redirect, Link, useRouteMatch, Route, Switch } from "react-router-dom";
import { LinkButton } from "../btn/button";

const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d4e09b;
  border-radius: 1rem;
  margin: 1rem;

  a,
  button {
    padding: 1rem;
    font-size: 2rem;
    color: #f6f4d2;
    font-family: "Kanit", sans-serif;
    background-color: #a44a3f;
    text-decoration: none;
    border-radius: 1rem;
    border-bottom: 1px dashed #a44a3f;
    margin: 1rem;
  }
`;

const Dashboard = (props) => {
  const auth = useContext(AuthContext);
  const { path, url } = useRouteMatch();
  if (auth.authenticate) {
    return (
      <DashboardStyle>
        <LinkButton path="/create" label="Create New" />
        <LinkButton path="/edit" label="Edit Existing" />
      </DashboardStyle>
    );
  } else {
    return (<Redirect to="/" />);
  }
};

export default Dashboard;
