import { useState } from "react";
import { NavbarBrand, Navbar, Collapse, NavbarToggler,Nav,NavItem } from "reactstrap";
import NucampLogo from '../app/assets/img/logo.png';
import { NavLink } from "react-router-dom";
import UserLoginForm from "../features/user/UserLoginForm";


const Header = () => {
    const [menuOpen, setMenueOpen] = useState(false);


    return (

            <Navbar dark color='primary' sticky='top' expand='md'>
                    <NavbarBrand href='/'>
                        <img src={NucampLogo} alt='nucamp logo' className='float-start'/>
                        <h1>NuCamp</h1>
                    </NavbarBrand>

                    <NavbarToggler onClick={() => setMenueOpen(!menuOpen)} />
                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <i className='fa fa-home fa-lg'/> Home 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/directory'>
                                    <i className='fa fa-list fa-lg'/> Directory
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'>
                                    <i className='fa fa-info fa-lg'/> About

                                </NavLink>
                                
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contact'>
                                    <i className='fa fa-address-card fa-lg'/> Contact

                                </NavLink>
                            </NavItem>
                        </Nav>
                        <UserLoginForm></UserLoginForm>
                    </Collapse>  
            </Navbar>
    )
}

export default Header;