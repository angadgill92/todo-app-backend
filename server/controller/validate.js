const graph = require('../../graphology/lib/index')
global.graphDataPath = __dirname
const validate = {}

function userByPhone (phone) {
  graph.load()
  var query = new graph.Query(graph.find('phone', phone))
  var user = query.next()
  if (user)
    return user.data
  else {
    var user = { }
    user.name = ''
    user.phone = phone
    return user
  }
// console.log(user)
}

validate.handlePost = function (req, res, next) {
  var phone = req.body.phone
  var accessToken = req.body.accessToken
  var user = userByPhone(phone)
  res.send({
    'name': user.name,
    'phone': user.phone
  })
}
export default validate
