import React, { Component } from 'react';
import CustomerCrud from './CustomerCrud'
import Sidebar from '../../Sidebar'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import '../adminCrud/./PageStyle.css'



class AdminCustomer extends Component{
  constructor() {
    super();
    this.state = { showMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);

  }
  toggleMenu = function() {
    this.setState({ showMenu: !this.state.showMenu });
  }
render(){
    return (
      <div>
        <Navbar bg="" variant="dark"  >
          {this.state.showMenu ? <div className='side'><Button  variant="secondary" active onClick={this.toggleMenu}><ReorderIcon/></Button></div> : <Button variant="light" onClick={this.toggleMenu}><ReorderIcon/></Button>}
        </Navbar>
        
        <div >
          {this.state.showMenu && <Sidebar/>}
          <div className={this.state.showMenu? 'shift-right' :""}>  
            <CustomerCrud/>
          </div>
        </div>
            
      </div>
   )
  }
 
}

export default AdminCustomer