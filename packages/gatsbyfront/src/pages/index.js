import React from 'react'
import { Container, Heading, Button, Flex } from "theme-ui";



const index = () => {
    return (
        <Container>
            <Flex sx={{flexDirection: 'column', padding: 3}}> 
                <Heading as="h1">Todo App </Heading>
                <Button sx={{marginTop: 4}}
                onClick={()=>{alert('LogIn me')}}
                >LogIn</Button>
                </Flex>

        </Container>
    )
}

export default index;

