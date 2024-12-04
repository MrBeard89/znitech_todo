import express from 'express'
import cors from 'cors'

const app = express()

//cors opciók beállitása
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
let tasks = []

//********************* Routes ********************* //
//express.Router-t nem használtam, gondoltam nem baj ha az index.js ben vannak a routeok, mivel kevés van

//Get all
app.get('/getAll', cors(corsOptions), (req, res) => {
  res.status(200).json(tasks)
})

//Add Task
app.post('/addTask', cors(corsOptions), (req, res) => {
  const newTask = {
    id: JSON.parse(req.body.id),
    taskName: req.body.taskName,
    completed: JSON.parse(req.body.completed),
  }

  if (!newTask.taskName) {
    return res.status(400).json({ msg: 'Kérlek irj egy feladatott!' })
  }

  tasks.push(newTask)
  res.status(201).json(tasks)
})

//Delete Task
app.post('/deleteTask', cors(corsOptions), (req, res) => {
  let findTaskById = tasks.find((task) => task.id === JSON.parse(req.body.id))

  function NotFound() {
    return res.status(404).json({ msg: 'Nincs ilyen feladat az adatbázisban!' })
  }

  function FoundById() {
    let filteredTasksArray = tasks.filter((task) => task.id !== findTaskById.id)
    tasks = filteredTasksArray
    res.status(201).json(tasks)
  }

  findTaskById !== undefined ? FoundById() : NotFound()
})

//Done Task(Update)
app.post('/doneTask', cors(corsOptions), (req, res) => {
  let findTaskById = tasks.find((task) => task.id === JSON.parse(req.body.id))

  function NotFound() {
    return res.status(404).json({ msg: 'Nem találtunk olyan feladatott amit be szeretne fejezni!' })
  }

  function FoundById() {
    tasks = tasks.map((task) => {
      if (task.id === findTaskById.id) {
        return { ...task, completed: true }
      } else {
        return task
      }
    })
    res.status(201).json(tasks)
  }

  findTaskById !== undefined ? FoundById() : NotFound()
})

app.listen(8000, () => {
  console.log('Server is running at port 8000')
})
