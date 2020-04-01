function ages(n){
    
    if(n<0){
        console.log("out of bounds");
    }
    else if(n<3){
        console.log("baby")
    }
    else if(n<14){
        console.log("child")
    }
    else if(n<20){
        console.log("teenager")
    }
    else if(n<66){
        console.log("adult")
    }
    else{
        console.log("elder")
    }
}
ages(-1)