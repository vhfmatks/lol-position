import React, { Component } from 'react';
import {Flex, Text, Box, Link} from 'rebass';
export default class Header extends Component {
    render() {
        return (
            <div>
                <Flex>
                    <Text p={2} color='white'>ll</Text>
                    <Box mx='auto'></Box>
                    <Link variant='nav' href='#1'>Profile</Link>
                </Flex>
            </div>
        )
    }
}
