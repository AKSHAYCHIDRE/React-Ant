import React, { Component } from 'react';
import './App.css';
import { Button, Menu,Breadcrumb } from 'antd';
import { Layout,  } from 'antd';
import { Typography} from 'antd';
import { Avatar } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

class App extends Component {
  render() {
    return (
      <div classname="App">
         <Layout>
          <Header style={{ padding: 10 }}>
             <Avatar style={{ float: 'right' }} src='logo.svg' />
             <Title style={{ color: 'white' }} level={3}>Logo</Title>
          </Header>
          <Layout>
            <Sider style={{ background: '#000' }}>
                <Menu
  

                >
                  <Menu.Item key="dashboard">
                    Dashboard
                  </Menu.Item>
                    <SubMenu
                      title={
                        <span>
                          
                          <span>About US</span>
                        </span>
                      }
                    >

                      <Menu.ItemGroup key='AboutUS' title='Country 1'>
                        <Menu.Item key='1'> Location 1</Menu.Item>
                        <Menu.Item key='2'> Location 2</Menu.Item>
                      </Menu.ItemGroup>

                    </SubMenu>

                </Menu>
            </Sider>
          
          <Layout>
          <Breadcrumb style={{ margin: '21px 16px 6px' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
          <Content style={{ margin: '16px 16px 0', background: '#fff'  }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 600 }}>
              This a page
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Achidre</Footer>

          </Layout>
        </Layout>
        </Layout>
      </div>
    );
  }
}
export default App;