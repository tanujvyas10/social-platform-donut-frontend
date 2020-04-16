import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DonutTitleSmall } from "../../../donutTitle/donutTitle";
import "./navigation.scss";
import {Logout} from "../../profile/popups/logout";
import logo from "../../../svgs/logout.svg";

class Navigation extends Component {
  state = { logout:false };
  render() {
    let cancel =()=>this.setState({
      logout:false
    });
    const divStyle = {
      position: "absolute",
      bottom: 0
    };

    return (
      <div className="navigation">
        <ListGroup>
          <ListGroup.Item>
            <NavLink to="/dashboard"><div className="donut-title"><DonutTitleSmall /></div></NavLink>
          </ListGroup.Item>
          <ListGroup.Item
            className={this.props.dashboard ? "active" : "inactive"}
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                fill="black"
                fill-opacity="0.5"
                className="path-name"
              />
            </svg>

            <NavLink to="/dashboard" className="link">
              <b>Dashboard</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item className={this.props.posts ? "active" : "inactive"}>
            <svg
              width="38"
              height="38"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.8043 2.15521C16.2894 -0.592583 11.974 -0.725094 9.18483 1.82775C7.01728 3.81162 6.38726 6.85162 7.38933 9.39879L0.51388 16.6358L0.512961 16.6368C-0.117421 17.2947 -0.192773 18.2877 0.432155 18.9705C1.05658 19.6528 2.05245 19.6667 2.76255 19.0979L2.76367 19.097L10.5848 12.8875C13.0327 14.1087 16.1146 13.7488 18.2809 11.766C21.0701 9.2132 21.3195 4.90328 18.8043 2.15521ZM7.42991 7.18208C7.35949 5.37255 8.06656 3.5292 9.52241 2.19672C12.1156 -0.176716 16.1139 -0.0435814 18.4355 2.49291C19.2794 3.415 19.7875 4.52965 19.9677 5.68903C19.7875 4.52961 19.2795 3.41491 18.4355 2.49279C16.1139 -0.0437087 12.1156 -0.176843 9.52241 2.19659C8.06652 3.52911 7.35946 5.37251 7.42991 7.18208ZM0.501346 17.816C0.514476 17.5229 0.639746 17.227 0.874681 16.9821L7.97743 9.50584C7.97741 9.50581 7.9774 9.50578 7.97739 9.50575L0.874675 16.982C0.639707 17.2269 0.514446 17.5229 0.501346 17.816ZM1.3888 18.0951C1.55829 18.2802 1.80082 18.2289 1.96635 18.0964L9.84292 11.8427C9.791 11.8031 9.74144 11.7605 9.69188 11.7179C9.66833 11.6976 9.64478 11.6774 9.62098 11.6574C9.60059 11.6403 9.57995 11.6236 9.55931 11.6068C9.52355 11.5778 9.48777 11.5488 9.4532 11.5178C9.3222 11.3994 9.1965 11.2751 9.07586 11.1456C9.06899 11.1384 9.06178 11.1317 9.05458 11.125C9.04631 11.1173 9.03805 11.1096 9.03031 11.1012C9.02259 11.0927 9.01559 11.0837 9.00855 11.0747C9.00146 11.0656 8.99433 11.0565 8.9864 11.0479C8.86967 10.9174 8.75826 10.7832 8.65321 10.6437C8.62465 10.6055 8.59826 10.5664 8.57184 10.5273C8.55857 10.5077 8.5453 10.4881 8.53173 10.4685C8.51389 10.443 8.49568 10.4176 8.47749 10.3923C8.43899 10.3387 8.40052 10.2851 8.36551 10.2296L1.44021 17.5186C1.29214 17.6731 1.21959 17.9102 1.3888 18.0951Z"
                fill="black"
                fill-opacity="0.5"
                className="path-name"
              />
            </svg>

            <NavLink to="/pinned-posts" className="link">
              <b>Pinned Posts</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item className={this.props.org ? "active" : "inactive"}>
            <svg
              width="38"
              height="38"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM2 10C2 9.101 2.156 8.238 2.431 7.431L4 9L6 11V13L8 15L9 16V17.931C5.061 17.436 2 14.072 2 10ZM16.33 14.873C15.677 14.347 14.687 14 14 14V13C14 12.4696 13.7893 11.9609 13.4142 11.5858C13.0391 11.2107 12.5304 11 12 11H8V8C8.53043 8 9.03914 7.78929 9.41421 7.41421C9.78929 7.03914 10 6.53043 10 6V5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3V2.589C15.928 3.778 18 6.65 18 10C17.9998 11.7647 17.4123 13.4791 16.33 14.873Z"
                fill="black"
                fill-opacity="0.5"
                className="path-name"
              />
            </svg>

            <NavLink to="/organization" className="link">
              <b>Organization</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item
            className={this.props.profile ? "active" : "inactive"}
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M4.5 4.5C4.5 6.981 6.519 9 9 9C11.481 9 13.5 6.981 13.5 4.5C13.5 2.019 11.481 0 9 0C6.519 0 4.5 2.019 4.5 4.5ZM17 19H18V18C18 14.141 14.859 11 11 11H7C3.14 11 0 14.141 0 18V19H17Z"
                fill="black"
                fill-opacity="0.5"
                className="path-name"
              />
            </svg>
            <NavLink to="profile" className="link">
              <b>Account</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item style={divStyle}  className={this.props.settings ? "active" : "inactive"}>
            <svg
              width="38"
              height="38"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66 17.4698 9.34 17.4298 9.02L19.5398 7.37C19.7298 7.22 19.7798 6.95 19.6598 6.73L17.6598 3.27C17.5398 3.05 17.2698 2.97 17.0498 3.05L14.5598 4.05C14.0398 3.65 13.4798 3.32 12.8698 3.07L12.4898 0.42C12.4598 0.18 12.2498 0 11.9998 0H7.99984C7.74984 0 7.53984 0.18 7.50984 0.42L7.12984 3.07C6.51984 3.32 5.95984 3.66 5.43984 4.05L2.94984 3.05C2.71984 2.96 2.45984 3.05 2.33984 3.27L0.339839 6.73C0.209839 6.95 0.26984 7.22 0.45984 7.37L2.56984 9.02C2.52984 9.34 2.49984 9.67 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.45984 16.95 2.72984 17.03 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.2798 17.04 17.5398 16.95 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM9.99984 13.5C8.06984 13.5 6.49984 11.93 6.49984 10C6.49984 8.07 8.06984 6.5 9.99984 6.5C11.9298 6.5 13.4998 8.07 13.4998 10C13.4998 11.93 11.9298 13.5 9.99984 13.5Z"
                fill="black"
                fill-opacity="0.5"
              />
            </svg>
            <NavLink to="/settings" className="link">
              <b>Settings</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item style={divStyle}>
            <Button variant="link" size="sm" style=
            {{"margin-left": "-8.5px", color: "rgba(0, 0, 0, 0.5)"}} onClick={
              ()=>this.setState({logout:true})}>
            <img class="logout" src={logo} alt="L"></img>
            <b>Logout</b>
            </Button>
            <Logout show={this.state.logout}
              onHide={cancel} />
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

Navigation.propTypes = {
  dashboard: PropTypes.bool,
  post: PropTypes.bool,
  org: PropTypes.bool,
  profile: PropTypes.bool,
  settings: PropTypes.bool
}

export default Navigation;
