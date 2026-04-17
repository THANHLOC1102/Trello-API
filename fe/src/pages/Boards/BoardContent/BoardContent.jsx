import Box from '@mui/material/Box';
import ListColumns from './ListColumns/ListColumns';
import { mapOrder } from '../../../utils/sorts';

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
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
        <ListColumns columns={orderedColumns}/>
        
    </Box>
)
}

export default BoardContent