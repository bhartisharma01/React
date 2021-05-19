import React from 'react';
import style from './App.module.css';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import CancelIcon from "@material-ui/icons/Cancel";
const TodoList= (props) =>{
    
    return (
      <>
        <List className={style.todoList}>
          <ListItem button>
            <ListItemIcon>
              <CancelIcon className={style.removeIcon}
                onClick={() => {
                  props.onSelect(props.id);
                }}
              />
            </ListItemIcon>
            <ListItemText primary={props.text} />
          </ListItem>
        </List>
      </>
    );
}

export default TodoList;