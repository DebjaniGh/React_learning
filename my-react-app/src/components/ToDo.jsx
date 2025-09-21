import { useState } from 'react';
import CustomBtn from './CustomButton';

const ToDoList = () => {
  // toDos = state for todo items
  const [toDos, setToDos] = useState([]);

  // newToDo = state for input field asking user's input for new to item
  const [newToDo, setNewTodo] = useState('');

  // Function to handle adding a new todo item
  const addToDo = () => {
    if (newToDo.trim() !== '') {
      setToDos([
        ...toDos,
        { seq: toDos.length + 1, text: newToDo, completed: false },
      ]);
      setNewTodo(''); // Clear input field after adding
    }
  };

  // delete an existing todo item
  const delToDo = (index) => {
    setToDos(toDos.filter((item) => item.seq !== index));
  };

  // complete a todo item
  const toggleCompleted = (index) => {
    setToDos(
      toDos.map((item) =>
        item.seq === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <input
          type='text'
          value={newToDo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <CustomBtn
          style={{ padding: '10px' }}
          label='Add a new task'
          onClick={addToDo}
        />
      </div>

      <ul>
        {toDos.map((item) => (
          <ol key={item.seq}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '10px',
              }}
            >
              <input
                type='checkbox'
                checked={item.completed}
                onChange={() => toggleCompleted(item.seq)}
              />
              <span style={{ flex: 1 }}>{item.text}</span>
              <CustomBtn
                label='Delete this task'
                onClick={() => delToDo(item.seq)}
              />
            </div>
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
