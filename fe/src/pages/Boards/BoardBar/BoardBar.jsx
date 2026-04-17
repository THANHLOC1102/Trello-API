import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {capitalizeFirstLetter } from '../../../utils/formatters';
const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  ' .MuiSvgIcon-root': { 
    color: 'white' 
  },
  '&:hover': {
    bgcolor: 'primary.50',
  }
}



function BoardBar({ board }) {
  return (
        <Box  sx={{ 
        width: '100%', 
        height: (theme) => theme.trelloCustome.boardBarHeight,
        display: 'flex',
        alignItems: "center",
        paddingX: 2,
        justifyContent: "space-between", //căn giữa theo chiều ngang, đẩy 2 phần ra 2 bên
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => ({
          backgroundColor: '#1976d2',
          ...theme.applyStyles('dark', {
            backgroundColor: '#34495e'
          })
        })

        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}> 
          <Chip 
          sx={MENU_STYLE}
          icon={<DashboardIcon />} label={board?.title} 
          onClick={() => {}}
          />
          
          <Chip 
          sx={MENU_STYLE}
          icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)}
          onClick={() => {}}
          />

          <Chip 
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />} label=" Add to Google Drive" 
          onClick={() => {}}
          />

          <Chip 
          sx={MENU_STYLE}
          icon={<BoltIcon />} label="Automation" 
          onClick={() => {}}
          />

          <Chip 
          sx={MENU_STYLE}
          icon={<FilterListIcon />} label="Filter" 
          onClick={() => {}}
          />
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        
        <Button 
          variant="outlined" 
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            borderWidth: '0.5px',
            '&:hover': {
              borderWidth: '1px',
            }
          }}
        >
          Invite
        </Button>
        
        
        <AvatarGroup max={4}
          sx={{
            gap: '10px',
           '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              fontSize: '16px',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '& first-of-type': {bgcolor: "#a4b0be"}
            },
          }}
          >
         
         
          <Tooltip title="Thành Lộc">
              <Avatar alt="Thành Lộc" 
              src="src/assets/kukuk.png" />
          </Tooltip>     
          <Tooltip title="Thành Lộc">
              <Avatar alt="Thành Lộc" 
              src="src/assets/kukuk.png" />
          </Tooltip> 
                    <Tooltip title="Thành Lộc">
              <Avatar alt="Thành Lộc" 
              src="src/assets/kukuk.png" />
          </Tooltip> 
          <Tooltip title="Thành Lộc">
              <Avatar alt="Thành Lộc" 
              src="src/assets/kukuk.png" />
          </Tooltip> 
          <Tooltip title="Thành Lộc">
              <Avatar alt="Thành Lộc" 
              src="src/assets/kukuk.png" />
          </Tooltip>      
        </AvatarGroup>


        </Box>
      </Box>
  )
}

export default BoardBar