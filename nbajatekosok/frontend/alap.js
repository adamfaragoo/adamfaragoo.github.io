function lekerdez(){
    fetch("http://localhost:3000/jatekosok")
    .then(x => x.json())
    .then(y => jatekosok_lekerdez(y));

}
lekerdez();

function jatekosok_lekerdez(adatok){
    console.log(adatok)

    var sz="";
    for (var elem of adatok){
        sz+='<tr>';
        sz+='<td>'+elem.jatekos_nev+'</td>';
        sz+='<td>'+elem.jatekos_poz+'</td>';
        sz+='<td>'+elem.jatekos_csapat+'</td>';
        sz+='<td>'+elem.jatekos_mezszam+'</td>';
        sz+='<td>'+elem.jatekos_kor+'</td>';
        sz+='</tr>';
    }
    document.getElementById("tablazat").innerHTML=sz;
}




function felvitel_jatekos(){
    
    var bemenet={
        bevitel1:document.getElementById("bevitel1").value,
        bevitel2:document.getElementById("bevitel2").value,
        bevitel3:document.getElementById("bevitel3").value,
        bevitel4:document.getElementById("bevitel4").value,
        bevitel5:document.getElementById("bevitel5").value,


    }

    fetch("http://localhost:3000/felvitel_jatekos", {
        method: "POST",
        body: JSON.stringify(bemenet),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      }
    
    )
    .then(x => x.text())
    .then(y => {alert(y); lekerdez();});
    }
