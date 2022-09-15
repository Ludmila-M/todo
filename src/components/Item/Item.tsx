import React from "react";

const Item = (todo: any) => {
    return (
    <div className="todo">
      {todo.text}
    </div>
    )
}

export default Item;