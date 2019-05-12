var mongoose=require('mongoose');
 
var genreSchema=mongoose.Schema({
    genre_name:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});
var Genre=module.exports=mongoose.model('Genre',genreSchema);

module.exports.getGenres=function(callback,limit){
    Genre.find(callback).limit(limit);
}
module.exports.addGenre=function(genre,callback){
    Genre.create(genre,callback);
}
module.exports.updateGenre=function(id,genre,option,callback){
    var query={_id:id};
    var update = {
        genre_name:genre.genre_name
    }
    Genre.findOneAndUpdate(query,update,option,callback);
}
module.exports.deleteGenre=function(id,callback){
    var query={_id:id};
    
    Genre.remove(query,callback);
}