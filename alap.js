fetch("https://raw.githubusercontent.com/siraly1636/siraly1636.github.io/main/elefant/assets/json/elefant.json")
.then(x => x.json())
.then(y => megjelenit(y));

/*  */


function megjelenit(adatok){
    var sz="";
    ///console.log(adatok)
    for(elem of adatok){
        sz+='<div class="col-3">'
        sz+='<p class="nevek">'+elem.name+'</p>'
        sz+='<br>'
        sz+="<a target='_blank' href='"+elem.image+"'><img src='"+elem.image+"' class='elefantkepek'></a>";
        sz+='<br>'
        sz+='<a href="'+elem.wikilink+'" target="popup">'+elem.wikilink+'</a>'
        sz+='</div>'
    }

    document.getElementById("ide").innerHTML=sz;
}



