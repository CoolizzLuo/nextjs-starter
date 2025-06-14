import { PropsWithChildren } from 'react';
import ChatPanel from './ChatPanel';

const fetchChatSessionMessages = async (sessionId: string) => {
  // Simulate fetching messages for the chat session
  // In a real application, this would be replaced with an API call
  return [
    { id: '1', content: 'Hello, how can I help you today?' },
    { id: '2', content: 'I have a question about my order.' },
    { id: '3', content: 'Sure, I can assist you with that.' },
  ];
};

type Props = PropsWithChildren<{
  params: { sessionId: string };
}>;

const Page = async ({ params }: Props) => {
  const messages = await fetchChatSessionMessages(params.sessionId);

  return <ChatPanel messages={messages} />;
};

export default Page;
