import express from 'express'
import cors from 'cors'

const app = express()

let allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']

const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST'],
  allowedHeaders: ['X-Requested-With'],
}

//Middlewares
app.use(express.json())
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))

app.options(allowedOrigins, cors(corsOptions))

//Task Array
const tasks = []

//Get all
app.get('/', cors(corsOptions), (req, res) => {
  res.status(200).json(tasks)
})

//Add Task
app.post('/', cors(corsOptions), (req, res) => {
  const newTask = {
    id: req.body.id,
    taskName: req.body.taskName,
    completed: req.body.completed,
  }

  if (!newTask.taskName) {
    return res.status(400).json({ msg: 'Kérlek irj egy feladatott!' })
  }

  tasks.push(newTask)
  res.status(201).json(tasks)
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})
