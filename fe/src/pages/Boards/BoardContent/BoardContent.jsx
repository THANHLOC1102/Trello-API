import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';


function BoardContent() {

   return (
      <Box sx={{ 
        bgcolor: (theme) => ({
          backgroundColor: '#1976d2',
          ...theme.applyStyles('dark', {
            backgroundColor: '#34495e'
          })
        }),
        width: '100%', 
        height: (theme) => theme.trelloCustome.boardContentHeight,
        p: '10px 0', //padding top-bottom 10px, left-right 0
      }}
        >
          <ListColumns/>
          
      </Box>
  )
}

export default BoardContent