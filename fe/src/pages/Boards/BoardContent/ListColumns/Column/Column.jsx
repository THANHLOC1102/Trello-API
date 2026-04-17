import Box from '@mui/material/Box';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip from '@mui/material/Tooltip';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCardIcon from '@mui/icons-material/AddCard';
import Button from '@mui/material/Button';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ListCards from './ListCards/ListCards';
import { mapOrder } from '~/utils/sorts';



function Column({column}) {
const [anchorEl, setAnchorEl] = useState(null)
const open = Boolean(anchorEl)
const handleClick = (event) => setAnchorEl(event.currentTarget)
const handleClose = () => setAnchorEl(null)  
const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, '_id')
    return (
        <Box sx={{
        maxWidth: '300px',
        minWidth: '300px',
        bgcolor: (theme) => ({
            backgroundColor: '#ebecf0',
            ...theme.applyStyles('dark', {
            backgroundColor: '#333643'
            })
            }),
        ml:2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trelloCustome.boardContentHeight} - ${theme.spacing(5)})`,
        }}>
        {/* Box Column Header */}
        <Box sx={{
            height: (theme) => theme.trelloCustome.columnHeaderHeight,
            p:2 ,//padding
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            // display: flex có nghĩa là phần tử con sẽ được sắp xếp theo hàng ngang, 
            // align-items: center sẽ căn giữa theo chiều dọc, 
            // justify-content: space-between sẽ đẩy 2 phần tử con ra 2 bên
        }}>
            <Typography variant='h6'
            sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: 'pointer',
    
            }}
            >
            {column?.title}
            </Typography>
            <Box>
            <Tooltip title="More options">
                <ExpandMoreIcon
                sx={{ color: 'text.primary', cursor: 'pointer' }}
                id="basic-column-dropdown"
                aria-controls={open ? 'basic-menu-column' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            </Tooltip>
            <Menu
                id="basic-menu-column"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                list: {
                    'aria-labelledby': 'basic-column-dropdown',
                },
                }}
            >
                <MenuItem>
                <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
                </MenuItem>


                <MenuItem>
                <ListItemIcon>
                    <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                </MenuItem>
        
                <MenuItem>
                <ListItemIcon>
                    <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                </MenuItem>
                
                <MenuItem>
                <ListItemIcon>
                    <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                </MenuItem>


                <Divider />
                <MenuItem>
                <ListItemIcon>
                    <DeleteForeverIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
                </MenuItem>
            </Menu>
            </Box>
        </Box>
     
        {/* Box ListCard */}
        <ListCards cards={orderedCards} />
        
         

        {/* Box Column Footer */}
        <Box sx={{
            height: (theme) => theme.trelloCustome.columnFooterHeight,
            p:2 ,//padding
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <Button startIcon={<AddCardIcon fontSize="small" />}>
            Add new card
            </Button>
            <Tooltip title="Drag  to move">
            <DragHandleIcon sx={{ color: 'text.primary', cursor: 'move' }} />
            </Tooltip>
        </Box>

        </Box>
  )
}

export default Column