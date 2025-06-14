import { PropsWithChildren } from 'react';

import { SidebarInset, SidebarProvider } from '@/components/ui/Sidebar';
import ChatSidebar from './ChatSidebar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider>
      <ChatSidebar />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
