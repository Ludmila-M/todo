import React from "react"
import Item from "../Item/Item";

const List = () => {
    const [todos, setTodos] = React.useState([
        { text: "one" },
        { text: "two" }
      ]);
      console.log(todos[0])
    return (
        <>
        todos list
        </>
    )
}

export default List;