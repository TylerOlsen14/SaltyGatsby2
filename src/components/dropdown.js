import React from 'react'
  import {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  } from "mdbreact";
  import { Link } from 'gatsby'

const ListLink = props => (
  <MDBDropdownItem style={{ display: `inline-block`, marginRight: `1rem`, }}>
    <Link to={props.to}>{props.children}</Link>
  </MDBDropdownItem>
)

const Navigation = () => {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Properties:
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdown>
            <Link to="/LaurelStreet">
              Laurel Street
            </Link>
          </MDBDropdown>
          <MDBDropdownItem divider />
          <MDBDropdown>
            <Link to="/EmmaStreet">
              Emma Street
            </Link>
          </MDBDropdown>
        </MDBDropdownMenu>
      </MDBDropdown>
    );
  }

export default Navigation