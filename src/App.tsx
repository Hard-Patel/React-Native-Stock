/**
 * @format
 */
import React from "react";

import NavContainer from "./navigation";
import AppProviders from "./Providers/AppProvider";
import { NativeBaseProvider } from "native-base";
import { ConfirmModalProvider } from "./components";

import { QueryClient, QueryClientProvider } from "react-query";
import { StatusBarRow } from "./components/StatusBar/StatusBarComponent";
import { OfflineBar } from "./components/Offline/OfflineBar";
import { useAppTheme, useAppThemeName } from "./theme";

function SubApp() {
  const theme = useAppTheme();

  return (
    <NativeBaseProvider theme={theme}>
        <StatusBarRow />
        <ConfirmModalProvider>
          <NavContainer />
        </ConfirmModalProvider>
      <OfflineBar />
    </NativeBaseProvider>
  );
}

function App() {

  return (
    <AppProviders>
      <SubApp />
    </AppProviders>
  );
}

export default App;
