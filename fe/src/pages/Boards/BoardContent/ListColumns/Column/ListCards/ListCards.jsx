import Box from '@mui/material/Box';
import Card from './Card/Card';


function ListCards({cards}) {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '0 5px',
        m: '0 5px',
        //p , m trick để tạo thanh scrollbar đẹp hơn
        overflowY: "auto",
        maxHeight: (theme) => `calc(
        ${theme.trelloCustome.boardContentHeight} - 
        ${theme.spacing(5)} -
        ${theme.trelloCustome.columnHeaderHeight} -
        ${theme.trelloCustome.columnFooterHeight}
        )`,
        '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da',
        borderRadius: '8px',
    },
        '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf',
    },
    }}>
        {cards?.map((card) => (
            <Card key={card._id} card={card} />
        ))}
       

    </Box>
  )
}

export default ListCards