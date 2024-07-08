import axios from 'axios';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { config } from '../config';
import { Heading, VStack } from '@chakra-ui/react';

function DropboxRedirect() {
  const [querys] = useSearchParams();
  const authorizeCode = querys.get('code');

  useEffect(() => {
    if (!authorizeCode) return;

    axios
      .post(
        `https://www.dropbox.com/oauth2/token`,
        {},
        {
          params: {
            code: authorizeCode,
            redirect_uri: config.DROPBOX_REDIRECT_URI,
            client_id: config.DROPBOX_CLIENT_ID,
            client_secret: config.DROPBOX_CLIENT_SECRET,
            grant_type: 'authorization_code',
          },
        }
      )
      .then(response => response.data)
      .then(data => {
        return axios.post(
          'http://localhost:8000/api/storage-provider',
          {
            ...data,
            type: 'Dropbox',
          },
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGluaHRiQGdtYWlsLmNvbSIsImV4cCI6MTcyMDQzNzIxOSwidHlwZSI6ImFjY2VzcyJ9.3l9mRWjwvpMlZnUrbiOGMj24mMSBzbGwi_oKOznuvPk`,
            },
          }
        );
      })
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }, [authorizeCode]);

  return (
    <VStack mt="200px" gap="30px">
      <Heading>Authorized Dropbox</Heading>
    </VStack>
  );
}

export default DropboxRedirect;
