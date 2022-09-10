const app = require('./app');

const port = 8080;

app.listen(port, () => {
    console.log(`App is listening to Port: ${port}`)
})