import React from "react";
import { Link,withRouter } from "react-router-dom";
import styled from 'styled-components';

const Header = styled.header `
    color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    background-color: rgba(0,0,0,0);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0);
`;

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    font-size: 15px;
    border-bottom: 3px solid
     ${props => (props.current ? "#000000" : "transparent")};
    transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default withRouter(({location: {pathname} }) => (
    <Header>
        <List>
            <Item current={pathname==="/"}>
                <SLink to="/">커뮤니티</SLink>
            </Item>
            <Item current={pathname==="/vaccinegraph"}>
                <SLink to="/vaccinegraph">살펴보기</SLink>
            </Item>
            <Item current={pathname==="/vaccinestatus"}>
                <SLink to="/vaccinestatus">접종현황</SLink>
            </Item>
            <Item current={pathname==="/my"}>
                <SLink to="/my">마이</SLink>
            </Item>
        </List>
    </Header>
    ));