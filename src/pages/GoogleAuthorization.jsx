import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { config } from '../config';

function GoogleAuthorization() {
  return (
    <VStack mt="200px" gap="30px">
      <Heading>Storage Provider</Heading>
      <Button
        p="20px"
        h="60px"
        onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=${config.SCOPE}&access_type=offline&prompt=consent&include_granted_scopes=true&response_type=code&client_id=${config.GOOGLE_CLIENT_ID}&redirect_uri=${config.GOOGLE_REDIRECT_URI}`;
        }}
      >
        <HStack gap="20px">
          <Box color="#228be6" fontSize="32px">
            <FaGoogle />
          </Box>
          <Text fontSize="24px">Google Authorization</Text>
        </HStack>
      </Button>
    </VStack>
  );
}

export default GoogleAuthorization;
