import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Heading, VStack } from '@chakra-ui/react';

function GoogleRedirect() {
  const [querys] = useSearchParams();
  const authorizeCode = querys.get('code');

  console.log(authorizeCode);

  // useEffect(() => {
  //   if (!authorizeCode) return;

  //   axios
  //     .post(config.GOOGLE_TOKEN_URI, {
  //       code: authorizeCode,
  //       client_id: config.GOOGLE_CLIENT_ID,
  //       client_secret: config.GOOGLE_CLIENT_SECRET,
  //       redirect_uri: config.GOOGLE_REDIRECT_URI,
  //       grant_type: 'authorization_code',
  //     })
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error));
  // }, [authorizeCode]);

  return (
    <VStack mt="200px" gap="30px">
      <Heading>Authorized Google Drive Success</Heading>
    </VStack>
  );
}

export default GoogleRedirect;
