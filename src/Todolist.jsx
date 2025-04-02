// import react useState
import React, { useState } from "react";
// import header
import Header from "./Header";
// import react-icons
import { FaRegTrashAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

function Todolist() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexTodo, setIndexTodo] = useState(null); //save and cancel button 

  // add button
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  console.log(todos);

  // delete button
  const deleteTodo = (index) => {
    const updateTodo = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(updateTodo);
  };
  // edit button
  const editTodo = (index) => {
    setIndexTodo(index);
    setInputValue(todos[index]);
  };

  // save button
  const saveEdit = () => {
    const updateTodo = [...todos];
    updateTodo[indexTodo] = inputValue;
    setTodos(updateTodo);
    setIndexTodo(null);
    setInputValue("");
  };

  // cancel button
  const cancelEdit = () => {
    setIndexTodo(null);
    setInputValue("");
  };
  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold text-center mb-4">Crud To-do list</h1>
      <div className="d-flex justify-center items-center space-x-4">
        <input
          type="text"
          value={inputValue}
          className="border-rounded text-lg border border-black p-2"
          placeholder="Enter a todo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        {indexTodo !== null ? (
          <>
            <button
              onClick={saveEdit}
              className="bg-green-500 text-white text-2xl p-1 rounded hover:bg-green-600 focus:outline-none "
            >
              {/* Save */}
              <FaCheckCircle />
            </button>
            <button
              onClick={cancelEdit}
              className="bg-red-500 text-white text-2xl p-1 rounded hover:bg-red-600 focus:outline-none "
            >
              {/* Cancel */}
              <MdCancel />
            </button>
          </>
        ) : (
          <button className="btn btn-success p-2" onClick={addTodo}>
            Add Todo
          </button>
        )}
      </div>
      <ul className="list-none text-center space-y-2 p-4">
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              className="flex justify-between  items-center  text-lg font-semibold bg-gray-100 p-2 rounded-lg shadow-md"
            >
              <span>{todo}</span>
              <div>
                <button
                  onClick={() => editTodo(index)}
                  className="bg-gray-500 text-lg mr-2  text-white p-1 rounded hover:bg-green-600 focus:outline-none"
                >
                  {/* Edit */}
                  <CiEdit />
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 text-white p-1 rounded hover:bg-red-600 focus:outline-none"
                >
                  {/* Delete */}
                  <FaRegTrashAlt />
                </button>
              </div>
              {/* how to edit and update button */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
