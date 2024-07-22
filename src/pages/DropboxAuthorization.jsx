import { Box, Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaDropbox } from 'react-icons/fa';
import { config } from '../config';

function DropboxAuthorization() {
  return (
    <VStack mt="200px" gap="30px">
      <Heading>Storage Provider</Heading>
      <Button
        p="20px"
        h="60px"
        onClick={() => {
          window.location.href = `https://www.dropbox.com/oauth2/authorize?client_id=${config.DROPBOX_CLIENT_ID}&redirect_uri=${config.DROPBOX_REDIRECT_URI}&response_type=code&token_access_type=offline`;
        }}
      >
        <HStack gap="20px">
          <Box color="#228be6" fontSize="32px">
            <FaDropbox />
          </Box>
          <Text fontSize="24px">Dropbox Authorization</Text>
        </HStack>
      </Button>
    </VStack>
  );
}

export default DropboxAuthorization;
