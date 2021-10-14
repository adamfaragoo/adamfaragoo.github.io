fetch("https://raw.githubusercontent.com/siraly1636/siraly1636.github.io/main/elefant/assets/json/elefant.json")
.then(x => x.json())
.then(y => megjelenit(y));



function megjelenit(adatok){
    var sz="";
    ///console.log(adatok)
    for(elem of adatok){
        sz+='<div class="col-3">'
        sz+='<p class="nevek">'+elem.name+'</p>'
        sz+='<br>'
        sz+="<img src='"+elem.image+"'class='elefantkepek' onclick='nagyitas(this)'>"
        sz+='<br>'
        sz+='<a href="'+elem.wikilink+'" target="popup" >'+elem.wikilink+'</a>'
        sz+='</div>'
    }

    document.getElementById("ide").innerHTML=sz;
}


function nagyitas(img, height, width) {
    if(img.style.height == '150px'){
        img.style.height = '300px';
        img.style.width = '300px';
    }
    else{
        img.style.height='150px';
        img.style.width='auto';
    }
}

