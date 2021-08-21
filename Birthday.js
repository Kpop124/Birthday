function start(get_image){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img ; 
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
           top:player_y,
           left:player_x
        })
        canvas.add(player_object)
       })
    fabric.Image.fromURL("get_image", function(Img){
     block_image_object=Img ; 
     block_image_object.scaleToWidth(block_image_width)
     block_image_object.scaleToHeight(block_image_height)
     block_image_object.set({
        top:player_y,
        left:player_x
     })
    canvas.add(block_image_object);

});
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    key_value=e.keyCode
    if(key_value==38){
        up()
        console.log("up")
    }
    if(key_value==40){
        down()
        console.log("down")
    }
    if(key_value==37){
        left()
        console.log("left")
    }
    if(key_value==39){
        right()
        console.log("right")
    }
}
function play(){
    "https://youtu.be/O2aQhWwxuyY".play();
}