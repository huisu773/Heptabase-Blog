import React from 'react';
import { Link } from 'react-router-dom';
import CONFIG from '../config'
// import { Button } from 'antd';
import logo from '../logo.png'
// import '../output.css'
// import '../index.css'
// import { NextUIProvider } from "@nextui-org/system";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";


// 页面头部
class Nav extends React.Component {


    componentDidMount() {

        // getHeptabaseData()
    }

    handleNavBarClick = (e) => {
        console.log('handleNavBarClick');
        // 记录跳转类型，实现打开新卡片后定位到卡片顶部
        sessionStorage.setItem('nav_type', 3)

    }

    render() {
        console.log(CONFIG);
        // 加载 Tabs
        let tabs = []
        Object.keys(CONFIG['pages']).forEach(key => {

            let page
            if (key === 'Activity') {
                page = <NavbarItem >
                    <Link key={CONFIG['pages']} to='/activity'>Activity</Link>
                </NavbarItem>
            } else {
                page = <NavbarItem onClick={this.handleNavBarClick}>
                    <Link key={key} to={'/post?note-id=' + CONFIG['pages'][key] + '&active-note-id=' + CONFIG['pages'][key]}>{key}</Link>
                </NavbarItem>
            }

            tabs.push(page)

        });


        return (
            < Navbar shouldHideOnScroll isBlurred={false} maxWidth={'full'} height={'3rem'} isBordered={true} >
                <NavbarBrand>
                    <span key='home' onClick={this.handleNavBarClick}><Link to='/'><img style={{ width: '22px' }} src={logo}></img></Link></span>
                </NavbarBrand >
                <NavbarContent className='nav' justify="end"
                    style={{ marginBottom: '0' }}
                >
                    {tabs}
                </NavbarContent>
            </Navbar >

        );
    }
}

export default Nav;