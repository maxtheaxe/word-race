function analyze(str){
    var pointTotal=0;
    var words=str.split(" ")
    for (var i = 0; i < words.length - 1; i++) {

        }
    for (var i = 0; i < words.length - 1; i++) {
       
        if (words[i]==("to"))
            pointTotal+=2;
        else if (words[i]==("the"))
            pointTotal+=1;
        else if (words[i]==("on"))
            pointTotal+=1;
        else if (words[i]==("pet"))
            pointTotal+=1;
        else
            pointTotal+=5;
    }
    return pointTotal;
}

