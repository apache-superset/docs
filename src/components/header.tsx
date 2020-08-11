import React from "react"
import { Link } from "gatsby"
import styled from "@superset-ui/style"


const LinkWrapper = styled.div`
  margin: 0 auto,
  maxWidth: 960,
  padding: 1.45rem 1.0875rem,
`;

const Header = ({ siteTitle }) => (
  <header
  >
    <div
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

//export default Header;
export default styled(Header)`
  background: red;
  marginBottom: 1.45rem,

`;
