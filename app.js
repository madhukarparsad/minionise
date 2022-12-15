var btnTranslate=document.querySelector("#btn-translate");

var txtIput=document.querySelector("#txt-input");
var outPut=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(serverURL){
    return serverURL+"?"+"text= "+txtIput.value
}
function errorHandler(error){
    console.log("error occured",error);
    alert("something wrong with server! Try again after some time")
}


function clickHandker(){
    fetch(getTranslationURL(serverURL))
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated;
        outPut.innerText=translatedText
      })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandker);