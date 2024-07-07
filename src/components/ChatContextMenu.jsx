// ChatContextMenu.js
import React from 'react';
import { Menu, MenuItem } from '@mui/material';

const ChatContextMenu = ({ mousePosition, handleClose, onOptionSelect }) => {
  const options = ['Pin', 'Archive', 'Open', 'Hide', 'Delete'];

  return (
    <Menu
      anchorReference="anchorPosition"
      anchorPosition={mousePosition ? { top: mousePosition.mouseY, left: mousePosition.mouseX } : undefined}
      open={Boolean(mousePosition)}
      onClose={handleClose}
    >
      {options.map((option) => (
        <MenuItem
          key={option}
          onClick={() => {
            onOptionSelect(option);
            handleClose();
          }}
        >
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default ChatContextMenu;
