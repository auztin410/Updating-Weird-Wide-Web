import React from "react"
// import Router from "router"
import { Navbar, Button, Icon, Dropdown, NavItem, Modal, Input, Row } from "react-materialize"

const Nav = props => (
    <Navbar right href='#' brand={<span><header><h1>W<span className="animate-flicker">e</span>ird Wide Web</h1></header></span>}>
        <NavItem  href='/'>Randomize</NavItem>
        <NavItem><Dropdown trigger={
                    <Button className="dropdown-trigger">Categories</Button>

                }>
                {/* add more as needed   */}
                    <NavItem><a href="/">Home</a></NavItem>
                    <NavItem><a href="/form">Submit</a></NavItem>
                    <NavItem><a href="/display">Search</a></NavItem>
                    <NavItem><a href="/profile">Profile</a></NavItem>

                </Dropdown></NavItem>
        <NavItem  href={props.userPageUrl}><span>{props.user ? props.user.username: ""}</span> </NavItem>
        <NavItem><Modal
                    header='Login'
                    trigger={<Button>Login</Button>}
                    actions={<div>
                        <Button onClick={props.handleGoogle}>Login with Google</Button>
                        <Button onClick={props.handleCreate}>Create Account</Button>
                        <Button onClick={props.handleLogin}>Login</Button>
                    </div>}>
    
                    <Row>
                        <Input name="username" type="text" s={12} label="Username" onChange={props.handleInputChange} validate />
                    </Row>
                    <Row>
                        <Input name="email" type="email" s={12} label="Email" onChange={props.handleInputChange} validate />
                    </Row>
                    <Row>
                        <Input name="password" type="password" s={12} label="Password" onChange={props.handleInputChange} validate />
                    </Row>
                </Modal></NavItem>
    </Navbar>
)

export default Nav;