// App.js
import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '../utils/theme';
import PeopleChatScreen from '../pages/PeopleChatScreen/PeopleChatScreen';
import ChatScreen from '../pages/ChatScreen/ChatScreen';

const chats = [
  {
    id: 1,
    title: 'Chat 1',
    messages: [
      { id: 1, text: 'This is a chat message.' },
    ],
  },
  {
    id: 2,
    title: 'Chat 2',
    messages: [
      { id: 1, text: 'This is a chat message.' },
    ],
  },
  {
    id: 3,
    title: 'Chat 3',
    messages: [
      { id: 1, text: 'This is a chat message.' },
    ],
  },
];

const ChatApp = () => {
  const [selectedChatId, setSelectedChatId] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  const handleContextMenuAction = (action, chat) => {
    console.log(`Action: ${action}, Chat: ${chat.name}`);
    // Handle the action here (e.g., pin, archive, open, hide, delete)
  };

  const selectedChat = chats.find(chat => chat.id === selectedChatId);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: '0 0 auto', width: { xs: '100%', sm: '25%' }, borderRight: '1px solid #333' }}>
          <PeopleChatScreen onSelectChat={handleSelectChat} selectedChatId={selectedChatId} onContextMenuAction={handleContextMenuAction} />
        </Box>
        <Box sx={{ flex: '1 1 auto' }}>
          <ChatScreen selectedChat={selectedChat} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ChatApp;
