const get = (req, res, next) => {
    try{
        console.log(req.query.rest + '슈바');
        return res.json({message: 'users get'});
    }catch (e){
        next(e)
    }
  }
  
  export {
    get
  }
  