import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Card } from 'antd';
import 'antd/dist/antd.css';
import { MenuOutlined, HomeOutlined } from '@ant-design/icons';

import Logo from '../assets/img/png/flecaPunto.png'
import header from '../assets/img/png/header.png'


import './LayoutAdmin.scss'

export default function LayoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <Header className="layoutAdmin__header">
                <div className="layoutAdmin__header-img">
                    <img
                        src={header}
                        alt="Luka Brizzi"
                    />
                </div>
                {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">
                            <HomeOutlined />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/admin/menu-web">
                            <MenuOutlined />
                            <span className="nav-text">Menú Web</span>
                        </Link>
                    </Menu.Item>
                </Menu> */}
            </Header>
            <Content className="layoutAdmin__content">
                <LoadRoutes routes={routes} style={{ padding: 24, minHeight: 360 }} />

            </Content>
            <Footer className="layoutAdmin__footer" style={{ textAlign: 'center' }}>©2021 Created by Luka Brizzi</Footer>
        </Layout>
    )
}


function LoadRoutes({ routes }) {

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}