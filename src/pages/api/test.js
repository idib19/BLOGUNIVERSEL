
export default function handler(req, res) {
  const randomunber = Math.floor(Math.random() * 100)
    res.status(200).json({ name: 'Idrissa' , number : randomunber })
  }

