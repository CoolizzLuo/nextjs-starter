import { PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import QueryProvider from './QueryProvider';
import ThemeProvider from './ThemeProvider';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <SessionProvider>
        <QueryProvider>{children}</QueryProvider>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Provider;
