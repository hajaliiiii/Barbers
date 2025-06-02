const db = require("./db");
const app = require("./app");
// const redis = require("./redis");




async function startServer() {
    try {
        await db.getConnection();
        // await redis.ping();

        app.listen(3000, () => {
            console.log(`Listening on port ${3000}`);
        });
    } catch (err) {
        console.log("Error ->", err);

        await db.close();
        // await redis.disconnect();
    }
}

startServer();
