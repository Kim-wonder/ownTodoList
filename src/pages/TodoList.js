import React from 'react';




function TodoList() {

    const Layout1 = {
        maxWidth : '1200px',
        minWidth : '800px',
        justifyContent : 'spaceBetween',
    }
    const Header = {
        backgroundColor: '#fee',
        height : '40px',
        display : 'flex',
        justifyContent : 'spaceBetween',
        alignItem : 'center',
        
    }
    const Form = {
        border : '1px solid gray',
        color : 'gray',
        justifyContent : 'spaceBetween',
        backgroundColor : '#eef',
    }
    const List = {
        
    }
    const Listtitle = {
        border : '1px solid blue',
        color : 'gray',
    }
    const ListBox = {
        border : '1px solid green',
    }
    const Todo = {
        border : '1px solid pink',
        borderRadius : '10px',
        width : '10em',
        margin : '5px',
        padding : '10px',
    }
    const TodoBtn = {
        
    }
    
    
    

  return (
    <div style = {Layout1}>
        <div style = {Header}>
            <div>My Todo List</div>
            <div>React</div>
        </div>
        <div style = {Form}>
            <div>
                <label>제목</label>
                <input type="text"></input> 
                <label>내용</label>
                <input type="text"></input> 
                <button type="button">추가하기</button>
            </div>
        </div>
        <div style = {List}>
            <div>
                <h2 style = {Listtitle}>다 했어요 🔥</h2>
                <div style = {ListBox}>
                    <div style = {Todo}>
                       <div>
                            <h2>할일제목</h2>
                            <div>할일내용</div>
                        </div>
                        <div style = {TodoBtn}>
                            <button>삭제하기</button>
                            <button>완료</button>
                        </div> 
                    </div>            
                </div>
            </div>                        
        </div>
        <div style = {List}>
            <div>
                <h2 style = {Listtitle}>다 했어요 🔥</h2>
                <div style = {ListBox}>
                    <div style = {Todo}>
                       <div>
                            <h2>할일제목</h2>
                            <div>할일내용</div>
                        </div>
                        <div style = {TodoBtn}>
                            <button>삭제하기</button>
                            <button>취소</button>
                        </div> 
                    </div>            
                </div>
            </div>                        
        </div>
    </div>
  ) 
}

export default TodoList;