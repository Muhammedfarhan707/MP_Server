//imprting JSON derver package
const JSONserver=require('json-server')

//creating servr using create() method from json-server
const MPserver=JSONserver.create()

//generating path/route to server resources
const router=JSONserver.router("db.json")

//initiating json-server middleware
const middleware=JSONserver.defaults()


//creating PORT number for server
const PORT=3001| process.env.PORT

//implementing route to resource to server
MPserver.use(middleware)

//implementing middleware to server
MPserver.use(router)

//run command for server
MPserver.listen(PORT,()=>{
    console.log(`Server is running at:${PORT}`)
}    )