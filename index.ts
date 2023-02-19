import conn from "./db/conn"
import app from "./app"
import { port } from "./config/environment/config"

conn.then(
    () => {
        app.listen(5500, () => {
            console.log(`🚀  GraphQL server running at port: ${port}`)
        })
    }
)