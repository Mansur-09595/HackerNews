import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useAppDispatch } from '../hooks/hooks';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { getPost } from '../store/reducers/newsAction';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const refreshNews = () => {
      dispatch(getPost());
    };
  
    return (
      <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button onClick={refreshNews}>Обновить</Button>
        <Link to="/"><button className='button'><h1 style={{margin: "0 0 0 35vh"}}>HACKER NEWS</h1></button></Link> 
      </Toolbar>
    </React.Fragment>
    )
  }
  
  export default Navbar;
  