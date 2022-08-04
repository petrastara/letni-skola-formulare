console.log('JavaScript funguje');

let formular = document.querySelector("#formular");
 //nebo zapsat, jednoduší, ale ne tak přehledné: document.querySelector("#formular").addEventListener(asda)
    formular.addEventListener("submit",zpracujFormular); //fci vepsat, nebo založit jinou - zavolat ji jen vypsání názvu ALE nepsat závorky

function zpracujFormular(event){
    event.preventDefault() /*zabrání akci, kterou s formulářem počítač dělá - posílá na serve, říká: "JÁ SI S TIM PORADIM SÁM"*/
    console.log("zpracovavam");
    let jmeno = document.querySelector("#jmeno").value /*value = abych dostala jméno = hodnotu*/ /*prvek musím najít, abych dál pracovala*/
        console.log(jmeno)

    let adresa = document.querySelector("#adresa").value 
        console.log(adresa)

    let datum = document.querySelector("#datum").value 
        console.log(datum)

    let mesto = document.querySelector("#mesto").value 
        console.log(mesto)

    let telefon = document.querySelector("#telefon").value
        console.log(telefon) 

    let vek = document.querySelector("#vek").value 
        console.log(vek)
    
    let email = document.querySelector("#email").value
        console.log(email)

    let barva = document.querySelector('#barva').value
        console.log(barva)

    
    let souhlas = document.querySelector("#souhlas").value
        if(souhlas === true){
            console.log("Zákoš souhlasí, zaspamujeme ho!!!")
        } else{
            console.log("Tomuhle nic posílat nebudem...")
        }
}
let barvicka = document.querySelector('#barva')
barvicka.addEventListener('change', zmenBarvu)
function zmenBarvu(){
    let barvicka = document.querySelector("#barva").value
    document.querySelector("body").style.backgroundColor = barvicka;   }


