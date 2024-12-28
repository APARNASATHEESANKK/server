const jsonServer=require('json-server')

const Mpserver=jsonServer.create()

const middileware=jsonServer.defaults()

const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

Mpserver.use(middileware)
Mpserver.use(route)


Mpserver.listen(PORT,()=>{
   console.log(`BookHub server running at ${PORT} and waiting for client request`);

})

