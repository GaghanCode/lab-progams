import { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const API = "http://localhost:3000/api"

export default function App() {

  const [count, setCount] = useState(0)
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")

  // Load tasks from backend
  const loadTasks = async () => {
    try {
      const res = await axios.get(`${API}/tasks`)
      setTasks(res.data)
    } catch (err) {
      console.error("Error loading tasks", err)
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  // Add new task
  const addTask = async (e) => {
    e.preventDefault()

    if (!title.trim()) return

    try {
      const res = await axios.post(`${API}/tasks`, { title })
      setTasks(prev => [...prev, res.data])
      setTitle("")
    } catch (err) {
      console.error("Error adding task", err)
      alert("Failed to add task. Check backend server.")
    }
  }

  // Toggle task completion
  const toggleTask = async (id) => {
    try {
      const res = await axios.patch(`${API}/tasks/${id}/toggle`)
      setTasks(tasks.map(t => t.id === id ? res.data : t))
    } catch (err) {
      console.error("Toggle failed", err)
    }
  }

  return (
    <div className="container">

      <h1 className="title">React + Express Lab</h1>

      {/* Counter Section */}
      <div className="card">

        <h2>Counter</h2>

        <p className="count">{count}</p>

        <div className="buttons">

          <button
            className="btn primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="btn secondary"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <button
            className="btn danger"
            onClick={() => setCount(0)}
          >
            Reset
          </button>

        </div>

      </div>

      {/* Task Section */}
      <div className="card">

        <h2>Tasks</h2>

        <form onSubmit={addTask} className="task-form">

          <input
            type="text"
            placeholder="Add new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button className="btn primary">
            Add
          </button>

        </form>

        <ul className="task-list">

          {tasks.map(t => (

            <li key={t.id} className={t.done ? "done" : ""}>

              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggleTask(t.id)}
              />

              {t.title}

            </li>

          ))}

        </ul>

      </div>

    </div>
  )
}