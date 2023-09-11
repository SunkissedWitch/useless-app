const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const productData = [
  {
    name: 'Vintage Typewriter to post awesome stories about UI design and web dev.',
    image: 'typewriter.png',
    rate: 3,
    price: 49.50,
    description: 'Eligible for Shipping To Mars or somewhere else'
  },
  {
    name: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
    image: 'leather_shoes.png',
    rate: 4,
    price: 13.95,
    description: '1258 bids, 359 watchers\n $5.95 for shipping'
  },
  {
    name: 'Timesaving kitten to save months on developement. Playful, cute, cheap!',
    image: 'kitten.png',
    rate: 5,
    price: 528.99,
    description: 'Eligible for nothing :('
  },
  {
    name: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
    image: 'plastic_plugs.png',
    rate: 4,
    price: 12.48,
    description: 'Worldwide shitting avaliable \n Buyers protection possible!'
  },
  {
    name: 'Creativity stimulation lotion. Drink every morning to generate better ideas!',
    image: 'lotion.png',
    rate: 4.99,
    price: 12.48,
    description: 'Worldwide shitting avaliable \n Buyers protection possible!'
  },
  {
    name: 'Prototyping items to create a lot if useless things...',
    image: 'things.png',
    rate: 2,
    price: 128.99,
    description: 'Showcasing onHovered state'
  },
  {
    name: 'John Von Ebalkin SPRING',
    image: 'pants.png',
    rate: 4.56,
    price: 13.95,
    description: '1258 bids, 359 watchers\n $5.95 for shipping'
  },
  {
    name: 'Envelope, Stripes, Pencil and etc. Purchase this kit and feel OKAY',
    image: 'cancelary.png',
    rate: 4.77,
    price: 9.50,
    description: 'Eligible for Shipping To Mars or somewhere else'
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const p of productData) {
    const product = await prisma.product.create({
      data: p,
    })
    console.log(`Created product with id: ${product.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
