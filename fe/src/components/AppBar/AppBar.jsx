import { useState } from 'react';
import Box from '@mui/material/Box';
import ModeSelect from "../ModeSelect/ModeSelect";
import AppsIcon from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon'
import TrelloIcon from '~/assets/trello.svg?react'
import WorkSpace from './Menus/WorkSpace'; 
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Templates from './Menus/Templates';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profile';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
function AppBar() {
  const [searchValue, setSearchValue] = useState(''); 
  return (
    <Box sx={{ 
        width: '100%', 
        height: (theme) => theme.trelloCustome.appBarHeight,
        display: 'flex',
        alignItems: "center",
        paddingX: 2,
        justifyContent: "space-between", //căn giữa theo chiều ngang, đẩy 2 phần ra 2 bên
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => ({
          backgroundColor: '#1565c0',
          ...theme.applyStyles('dark', {
            backgroundColor: '#2c3e50'
          })
        })
       }}
       
    >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AppsIcon sx={{color: 'white'}}/>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <SvgIcon component={TrelloIcon} fontSize="small" inheritViewBox sx={{ color: 'white' }} />
              <Typography variant="span" fontWeight="bold" color="white" fontSize={'1.1rem'}>
                Trello
              </Typography>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <WorkSpace/>
              <Recent/>
              <Starred/>
              <Templates/>
            </Box>
            <Button 
              sx={{ 
                //bgcolor: đổi màu nền, color: đổi màu chữ hoặc màu icon, border: đổi màu viền, 
                // paddingX: padding theo chiều ngang, borderRadius: bo tròn góc
                color: 'white', 
                border: 'none',
                
              }} 
              variant="outlined" 
              startIcon={<LibraryAddIcon />}
            >
              Create
            </Button>
        </Box>
        
        




        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
          <TextField 
          id="outlined-basic" 
          label="Search..." 
          variant="outlined" 
          type="text"
          size='small' 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{color: 'white'}}/>
                </InputAdornment>
              ),
              endAdornment: (
                  <CloseIcon
                   fontSize="small" 
                   sx={{color: searchValue ? 'white' : 'transparent', cursor: 'pointer'}}
                   onClick={() => setSearchValue('')}
                   />
              ),
            },
          }}
          sx={{
            minWidth: '120px' , maxWidth: '170px',
            '& label' : {color: 'white'},
            '& input' : {color: 'white'},
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white'},
              '&:hover fieldset': { borderColor: 'white'},
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          />
          <ModeSelect/>
      
      
        <Tooltip title="Notifications">
          <Badge variant="dot" color="warning" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon sx={{ color: "white" }} />
          </Badge>
        </Tooltip>
        
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ color: "white", cursor: "pointer" }} />
        </Tooltip>

        <Profile/>
        </Box>

      </Box>
  )
}

export default AppBar