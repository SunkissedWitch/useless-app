const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(cors())
app.use(express.json())

app.get(`/products/:id`, async (req, res) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    })
    res.json(product)
  } catch (error) {
    console.log('/products/:id [error]', error.message)
    res.status(404).send('Not found.')
  }

})

app.get('/products', async (req, res) => {
  const { searchString, skip, take, orderBy } = req.query
  console.log('[orderBy]', orderBy)

  const or = searchString
    ? {
        OR: [
          { name: { contains: searchString } },
          { rate: { equals: Number?.(searchString) || undefined } },
          { price: { equals: Number?.(searchString) || undefined } },
          { description: { contains: searchString } },
        ],
      }
    : {};
    try {
      const products = await prisma.product.findMany({
        where: {
          ...or,
        },
        take: Number(take) || undefined,
        skip: Number(skip) || undefined,
        orderBy: {
          name: orderBy || undefined,
        },
      })
    
      return res.json(products)
    } catch (error) {
      console.log(error)
      return res.json([])
    }
})

const server = app.listen(8081, () =>
  console.log(`
🚀 Server ready at: http://localhost:8081
⭐️ See sample requests: http://pris.ly/e/js/rest-express#3-using-the-rest-api`),
)
