import Container from '@mui/material/Container';
import AppBar from "../../components/AppBar/AppBar";
import BoardBar from "./BoardBar/BoardBar";
import BoardContent from "./BoardContent/BoardContent";
function Board() {
  return (
// disableGutters maxWidth={false} giúp chiếm toàn bộ chiều rộng trang
// display flex : giúp các phần tử con được sắp xếp theo hàng ngang
    <Container disableGutters maxWidth={false} sx={{height: '100vh' }}>
      
      <AppBar/>

       <BoardBar/>

       <BoardContent/>


    </Container>
  )
}

export default Board