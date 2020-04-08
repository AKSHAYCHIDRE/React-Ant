import React,{Component} from 'react'
import { Layout, Select,  Menu, Dropdown, Icon  } from 'antd';
import { Link } from 'react-router-dom'
import Home from '../components/home'
import About from '../components/about'

class MainHeader extends Component{
    render(){

        return(

        <div>
            
            <div className="container">
                <Link to='/'> Home  </Link>
                <Link to='/about'> About  </Link>
            </div>    
                        
        </div>

        )
    }
}
export default MainHeader;