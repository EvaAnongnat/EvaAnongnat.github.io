const app = require('./src/app')
const userRouter = require('./src/routes/user');
const PORT = process.env.PORT || 4001;

app.use('/users',userRouter);

app.listen(PORT, function(){
    console.log('server is running')
})