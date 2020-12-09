import express from 'express'
import TaskRoutes from './routes/tasks.routes'
import morgan  from 'morgan'
import cors from 'cors'


const app = express()


// Settings
app.set('port',  process.env.PORT || 3000)

// Middleware
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Routes
app.get('/', (req, res) => {
    res.json({message: 'Welcome to my application'})
})

app.use('/api/tasks', TaskRoutes)

export default app;
