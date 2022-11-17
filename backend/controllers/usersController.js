import User from "../models/User.js"

export async function createUser (req, res) {
  const user = new User(req.body)
  const token = user.generateAuthToken()
  await user.save()

  res.status(201).send(token)
}


export async function login(req, res, next) {
  const user = await User.findByEmail(req.body.email)


  if (!user) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const passwordsAreEqual = await user.checkPassword(req.body.password)

  if (!passwordsAreEqual) {
    return next({ status: 401, message: 'You shall not pass!' })
  }

  const token = user.generateAuthToken()
  await user.save()

  res.status(200).send(token)
  
}


export async function getUser(req,res){
  const user = req.user
  res.send(user)
}
