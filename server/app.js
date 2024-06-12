import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import workshopsData from './workshops.js'
import generateId from '../src/utils/generateId.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

ViteExpress.config({ printViteDevServerHost: true })

//*** API ROUTES ***///

app.get('/workshops', (req, res) => {
  res.json(workshopsData)
})

app.post('/workshops', (req, res) => {
  const newCard = {
    id: generateId(workshopsData.categoryData),
    workshopName: 'new lorem',
    workshopDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
    workshopShortDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis!',
    workshopImage: "https://picsum.photos/id/237/300/200?grayscale",
  }

  workshopsData.categoryData.push(newCard)

  res.status(200).json({ message: 'category data added' })
})

app.put('/workshops/:id', (req, res) => {
  const foundWorkshopId = workshopsData.categoryData.findIndex(workshop => workshop.id === +req.params.id) // parseInt(req.params.id)

  if (foundWorkshopId !== -1) {
    workshopsData.categoryData[foundWorkshopId] = { 
      ...workshopsData.categoryData[foundWorkshopId], 
      workshopName: req.body.name, 
      workshopShortDescription: req.body.workshopShortDescription 
    }

    return res.status(200).json({ message: 'category updated' })
  }

  return res.status(400).json({ message: 'error updating category data'})
})

app.delete('/workshops/:id', (req, res) => {
  // 1. Find what needs to be deleted
  // 2. Delete that item

  const foundWorkshopId = workshopsData.categoryData.findIndex(workshop => workshop.id === +req.params.id) // parseInt(req.params.id)

  if (foundWorkshopId !== -1) {
    workshopsData.categoryData.splice(foundWorkshopId, 1)

    return res.status(200).json({ message: 'category data deleted' })
  }

  return res.status(400).json({ message: 'error deleting category data'})
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}`))