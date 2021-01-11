import React,{useEffect} from 'react'
import { Container, Heading, Button, Flex } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";



export default props => {
    useEffect(()=>{
netlifyIdentity.init({});
    });
    return (
        <Container>
            <Flex sx={{flexDirection: 'column', padding: 3}}> 
                <Heading as="h1">Todo App </Heading>
                <Button sx={{marginTop: 4}}
                onClick={()=>{netlifyIdentity.open();}}
                >LogIn</Button>
                </Flex>

        </Container>
    )
}



