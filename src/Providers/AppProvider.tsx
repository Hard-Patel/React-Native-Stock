/**
 * @format
 */
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {NetworkProvider} from 'react-native-offline';
import {ThemeProvider} from '../theme';

const queryClient = new QueryClient();

interface ProvideProps {
  children: JSX.Element | JSX.Element[];
}

function AppProviders(props: ProvideProps) {
  const {children} = props;
  return (
    <QueryClientProvider client={queryClient}>
      <NetworkProvider>
        <ThemeProvider>
          <SafeAreaProvider>{children}</SafeAreaProvider>
        </ThemeProvider>
      </NetworkProvider>
    </QueryClientProvider>
  );
}

export default AppProviders;
