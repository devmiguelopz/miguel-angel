import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const createApolloClient = (apiKey: string) => {
  const httpLink = createHttpLink({
    uri: 'https://graph-ql.reachu.io',
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: apiKey ? `${apiKey}` : '',
    },
  }));

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};
