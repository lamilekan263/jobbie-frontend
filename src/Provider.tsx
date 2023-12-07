import React from 'react'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { ThemeProvider } from './components/theme-provider'
import { PersistGate } from 'redux-persist/integration/react';

interface ProviderProps {
  children: React.ReactNode
}
const Providers = ({ children }: ProviderProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </PersistGate >
    </Provider>

  )
}

export default Providers