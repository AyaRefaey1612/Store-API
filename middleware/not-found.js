const notFound=(req, res, next)=>res.status(500).send('the rout does not exist');

module.exports=notFound