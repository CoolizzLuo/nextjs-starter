import { PropsWithChildren } from 'react';
import ThemeProvider from './ThemeProvider';

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
};

export default Provider;
