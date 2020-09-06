import React from 'react'
import {push} from 'connected-react-router'
// import styles from '../../css/style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, initializeIcons } from '@fluentui/react';

const Navbar = () => {
    const navigationStyles = {
        root: {
          height: '97vh',
          boxSizing: 'border-box',
          border: '1px solid #eee',
          overflowY: 'auto',
          minHeight:'30vh'
        },
      };
    const dispatch = useDispatch();
   const {links} = useSelector(s=>s.NavigationBarReducer)
  const clickHandler = (event,item) =>{
      event.preventDefault()
    dispatch(push(item.url))
  }
  const linksRender = [{links:links}]
  initializeIcons();
    return (
        <Nav
      onLinkClick={clickHandler}
      groups={linksRender}
      styles={navigationStyles}
        />
    )
}

export default Navbar;
