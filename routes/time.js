/**
 * Created by Irfan on 03-Apr-17.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
router.post('/',function(req,res,nxt){

    var date= req.body.date;
    console.log(date);
    fs.appendFile('../log.txt', date+'\n', function (err) {
        if (err)
        {
            console.log('error occured in appending file');
        }
        else
        {
            console.log('Saved!');
            res.end('saved')
        }

    });

})

router.get('/log',function(req,res,next){
    fs.readFile('../log.txt','utf8',function(error, data){
        var result = data;
        console.log(result);
        res.end({log:result});
    })
    res.end()
})

module.exports = router;