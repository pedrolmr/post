import React from 'react';
import Todo from './Todo';

import styled from 'styled-components';

const Todos = props => {
    return(
        <Wrapper>
            <input placeholder="search" type="text" onKeyDown={props.searchHandler} />
            <List>
                {props.todos.map(t => {
                    return <Todo todo={t}/>;
                })}
            </List>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin:10px;
    input[type=text]{
        padding:10px;
        width:50%;
        font-size: 25px;
        outline: none;
    }
    input[type=text]:focus{
        transition:.1s;
        border:3px solid #4960B1;
    }
    input[type=text]::placeholder{
        text-transform:uppercase;
    }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default Todos;
