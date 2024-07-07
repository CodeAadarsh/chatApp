// PeopleChatScreen.js
import React, { useState } from 'react';
import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Typography, Stack, Button, IconButton } from '@mui/material';
import ChatContextMenu from '../../components/ChatContextMenu';
import { MoreVertRounded } from '@mui/icons-material';
const recentChats = [
  { id: 1, name: 'Alice', lastMessage: 'Hey there!' },
  { id: 2, name: 'Bob', lastMessage: 'How are you?' },
  { id: 3, name: 'Charlie', lastMessage: 'What’s up?' },
];

const PeopleChatScreen = ({ onSelectChat, onContextMenuAction,selectedChatId }) => {
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleRightClick = (event, chat) => {
    event.preventDefault();

    setContextMenu({ mouseX: event.clientX - 2, mouseY: event.clientY - 4 });
    setSelectedChat(chat);
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  const handleOptionSelect = (option) => {
    onContextMenuAction(option, selectedChat);
  };

  return (
    <Box
      sx={{ width: '100%',height:'100%', bgcolor: 'background.paper', color: 'text.primary' }}
      onContextMenu={(e) => e.preventDefault()} // Disable default context menu
    >
      <Stack sx={{ p: 2.74, borderBottom: 1, borderColor: 'divider',flexDirection:'row',justifyContent:'space-between',alignItems:'center' }}>
        <Stack sx={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'25%'}}>
        <Avatar src="" sx={{ bgcolor: 'grey.700' }} />
        <Typography variant="h5">Chats</Typography>

        </Stack>
        <IconButton>
        <MoreVertRounded/>
        </IconButton>
      </Stack>

      <List>
        {recentChats.map((chat) => (
          <React.Fragment key={chat.id}>
            <ListItem
              button
              onClick={() => onSelectChat(chat.id)}
              sx={{ bgcolor: selectedChatId === chat.id ? 'grey.800' : 'inherit', }}

              onContextMenu={(event) => handleRightClick(event, chat)}
            >
              <ListItemAvatar>
                <Avatar alt={chat.name} src="" sx={{ bgcolor: 'grey.700' }} />
              </ListItemAvatar>
              <ListItemText primary={chat.name} secondary={chat.lastMessage} />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </React.Fragment>
        ))}
      </List>
      <ChatContextMenu
        mousePosition={contextMenu}
        handleClose={handleClose}
        onOptionSelect={handleOptionSelect}
      />
    </Box>
  );
};

export default PeopleChatScreen;
