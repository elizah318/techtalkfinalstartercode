// JavaScript File
// JavaScript File
$( document ).ready(function() {
var pics =["ElizaFlorence.jpg","ElizaFrance.jpg","Elizaitaly.jpg","Elizasf.jpg","Elizawework.JPG","IMG_0053.jpg","IMG_8176.JPG"]
$("button").click(function(){
    var random = Math.floor(Math.random()*pics.length);
    $("#photo").append("<img src=photos/" +pics[random]+">");

});
});