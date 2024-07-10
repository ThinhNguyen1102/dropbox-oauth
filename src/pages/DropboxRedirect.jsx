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
      .then(response => console.log(response.data))
      // .then(data => {
      //   return axios.post(
      //     'http://localhost:8000/api/storage-provider',
      //     {
      //       ...data,
      //       type: 'Dropbox',
      //       connection_label: 'Dropbox-1',
      //     },
      //     {
      //       headers: {
      //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0aGluaHRiQGdtYWlsLmNvbSIsImV4cCI6MTcyMDU4MzE2OSwidHlwZSI6ImFjY2VzcyJ9.r6kbdaUm-m9baDToDHZWRCAzsIr2njS1NQJX1B0zHpw`,
      //       },
      //     }
      //   );
      // })
      .catch(error => console.log(error));
  }, [authorizeCode]);

  return (
    <VStack mt="200px" gap="30px">
      <Heading>Authorized Dropbox Success</Heading>
    </VStack>
  );
}

export default DropboxRedirect;
