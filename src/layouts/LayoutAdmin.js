import React, { useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu, Card, Col, Row, Avatar, Carousel } from 'antd';
import 'antd/dist/antd.css';
import { DownloadOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined, CodeOutlined } from '@ant-design/icons';

import Logo from '../assets/img/png/flecaPunto.png'
import header from '../assets/img/png/presentacion.png'

// import cvImg from '../../assets/img/png/cv.png'
import cvImg from '../assets/img/png/cv.png'
import cvFileEsp from '../assets/pdf/CV Luka Brizzi español.pdf'
import cvFileIng from '../assets/pdf/CV Luka Brizzi ingles.pdf'
import imgSillon from '../assets/img/png/labu.png'
import kerde from '../assets/img/png/kerde.png'
import marketing from '../assets/img/png/marketing.png'
import spotify from '../assets/img/png/spotify.png'


import './LayoutAdmin.scss'

export default function LayoutAdmin(props) {
    const { routes } = props;
    const { Header, Content, Footer } = Layout;
    const { Meta } = Card;

    const avatarColor = '#25d366';

    const contentStyle = {
        // height: '10px',
        color: '#fff',
        lineHeight: '300px',
        textAlign: 'center',
        background: '#364d79',
    };


    function Instagram() {
        window.open("https://www.instagram.com/lukabrizzi");
    }

    function Twitter() {
        window.open("https://twitter.com/lukabriz");
    }

    function LinkedIn() {
        window.open("https://www.linkedin.com/in/luka-brizzi-b19b971a8/");
    }

    function WhatsApp() {
        window.open("https://wa.link/fctepr");
    }

    function Kerde() {
        window.open("https://kerdelabs.com/");
    }

    function Dijon() {
        window.open("https://www.instagram.com/dijoncomidas");
    }

    function American() {
        window.open("https://www.instagram.com/americancarsvm");
    }

    function Ferre() {
        window.open("https://www.instagram.com/ferreteria_elgringo");
    }

    return (
        <Layout>
            <Content
                className="layoutAdmin__content"
                style={{ paddingLeft: 40, paddingRight: 40 }}
            >
                <Content
                    className="layoutAdmin__content"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                >
                    <div class="transition">
                        <div className="layoutAdmin__header" >
                            <img
                                src={header}
                                alt="Luka Brizzi"
                            />
                        </div >
                    </div>
                </Content>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={cvImg}
                                />
                            }
                            actions={[
                                <Link to={cvFileEsp} target="_blank" download><DownloadOutlined /> Spanish</Link>,
                                <Link to={cvFileIng} target="_blank" download><DownloadOutlined /> English</Link>
                            ]}
                        >
                            <Meta
                                title="Mi Cv"
                                description=""
                            />
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={imgSillon}
                                />
                            }
                            actions={[
                                <Link onClick={Instagram}><InstagramOutlined /> Instagram</Link>,
                                <Link onClick={Twitter}><TwitterOutlined /> Twitter</Link>,
                                <Link onClick={LinkedIn}><LinkedinOutlined /> LinkedIn</Link>
                            ]}
                        >
                            <Meta
                                title="Conocé un poco más de mi en mis redes sociales"
                                description=""
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>

            <Content
                className="layoutAdmin__content"
                style={{ paddingLeft: 40, paddingRight: 40 }}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={kerde}
                                />
                            }
                            actions={[
                                <Link onClick={Kerde}>Kerde Labs <CodeOutlined /></Link>
                            ]}
                        >
                            <Meta
                                title="Trabajo actual de desarrollo"
                                description="Kerde Labs"
                            />
                        </Card>
                    </Col>

                    <Col span={12}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={marketing}
                                />
                            }
                            actions={[
                                <Link onClick={Dijon}><InstagramOutlined /> Dijon</Link>,
                                <Link onClick={American}><InstagramOutlined /> American Cars</Link>,
                                <Link onClick={Ferre}><InstagramOutlined /> EG Ferreteria</Link>
                            ]}
                        >
                            <Meta
                                title="Trabajo actual de marketing y diseño grafico"
                                description="Dijon - American Cars - EG Ferreteria"
                            />
                        </Card>
                    </Col>
                </Row>
            </Content>
            <Carousel autoplay>
                <div>
                    <img
                        className="layoutAdmin__carrusel"
                        alt="example"
                        src={spotify}
                    />
                </div>
                <div>
                    <img
                        className="layoutAdmin__carrusel"
                        alt="example"
                        src={spotify}
                    />
                </div>
                <div>
                    <img
                        className="layoutAdmin__carrusel"
                        alt="example"
                        src={spotify}
                    />
                </div>
                <div>
                    <img
                        className="layoutAdmin__carrusel"
                        alt="example"
                        src={spotify}
                    />
                </div>
            </Carousel>
            <Footer className="layoutAdmin__footer" style={{ textAlign: 'center' }}>Made with React ©2021 Created by Luka Brizzi
                <div className="layoutAdmin__wpp" style={{ textAlign: 'right' }}>
                    <Avatar onClick={WhatsApp}
                        style={{
                            backgroundColor: avatarColor,
                            verticalAlign: 'middle',
                        }}
                        size={{
                            xs: 24,
                            sm: 32,
                            md: 40,
                            lg: 64,
                            xl: 80,
                            xxl: 100,
                        }}
                        icon={<WhatsAppOutlined />} >

                    </Avatar>
                </div>
            </Footer>
        </Layout >
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