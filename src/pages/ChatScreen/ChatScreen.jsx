// ChatScreen.js
import React from 'react';
import { Box, IconButton, Stack, Typography, TextField, Button, Avatar } from '@mui/material';
import { Phone as PhoneIcon, MoreVert as MoreVertIcon, VideoCall as VideoCallIcon } from '@mui/icons-material';
import './ChatScreen.css';
const ChatScreen = ({ selectedChat }) => {
  if (!selectedChat) {
    return (
      <Box sx={{ height:'100%',alignItems:'center',justifyContent:'center'}}>
    

        {/* Message */}
        <Box sx={{ position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'text.primary',top:'50%',bottom:'50%' }}>
          <Typography variant="h5">Select a chat to start messaging</Typography>
        </Box>
      </Box>
    );
  }

  const { title, messages } = selectedChat;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: 'background.default', color: 'text.primary' }}>
      <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #333' }}>
        <Stack direction="row" alignItems="center">
          <Avatar alt="User Avatar" src="" sx={{ bgcolor: 'grey.700' }} />
          <Box ml={2}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" color="text.secondary">Last seen recently</Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <IconButton sx={{ color: 'text.secondary' }}>
            <PhoneIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <VideoCallIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <MoreVertIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box sx={{ flex: '1 1 auto', overflowY: 'auto', p: 2 }}>
        {messages.map((message) => (
          <Box key={message.id} sx={{ mb: 2, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>{message.text}</Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ flex: '0 0 auto', p: 2, borderTop: '1px solid #333', display: 'flex', alignItems: 'center' }}>
        <TextField
          variant="outlined"
          placeholder="Type a message..."
          sx={{ flexGrow: 1, bgcolor: 'background.paper', borderRadius: 1, input: { color: 'text.primary' }, mr: 2 }}
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatScreen;
