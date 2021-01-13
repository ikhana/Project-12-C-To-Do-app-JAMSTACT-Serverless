import React, { useContext } from 'react'
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import { IdentityContext } from "../../netlifyIdentityContext";
import { Link } from "gatsby";



export default props => {
    const {user,identity: netlifyIdentity} = useContext(IdentityContext);;
    return (
        <Container>
            <Flex as='nav'>
                <NavLink as={Link} to="/" p={2}>
                    Home
  </NavLink>
                <NavLink as={Link} to={"/app"} p={2}>
                    Dashboard
  </NavLink>
              {user &&  (<NavLink p={2}>
                    {user.user_metadata.full_name}
                </NavLink>)}
            </Flex>
            <Flex sx={{ flexDirection: 'column', padding: 3 }}>
                <Heading as="h1">Todo App </Heading>
                <Button sx={{ marginTop: 4 }}
                    onClick={() => { netlifyIdentity.open(); }}
                >LogIn</Button>
            </Flex>

        </Container>
    )
}



