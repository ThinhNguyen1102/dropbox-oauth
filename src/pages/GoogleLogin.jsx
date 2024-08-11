import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { config } from '../config';

function GoogleLogin() {
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async codeResponse => {
      axios
        .post(config.GOOGLE_TOKEN_URI, {
          code: codeResponse.code,
          client_id: config.GOOGLE_CLIENT_ID,
          client_secret: config.GOOGLE_CLIENT_SECRET,
          redirect_uri: config.GOOGLE_REDIRECT_URI_,
          grant_type: 'authorization_code',
        })
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    },
    onError: errorResponse => console.log(errorResponse),
  });

  return (
    <VStack mt="200px" gap="30px">
      <Heading>Storage Provider</Heading>
      <Button p="20px" h="60px" onClick={() => googleLogin()}>
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

export default GoogleLogin;
