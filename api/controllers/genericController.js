'use strict';


exports.genericResponse = function(req, res){
    res.json({'example' : 'yes'});
};


exports.genericPost = function(req, res){
    res.json(req.body);
}; 