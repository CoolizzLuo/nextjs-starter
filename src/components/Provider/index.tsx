import { PropsWithChildren } from 'react';
import QueryProvider from './QueryProvider';
import ThemeProvider from './ThemeProvider';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
};

export default Provider;
