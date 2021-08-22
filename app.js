var txtInput = document.querySelector("#txt-input");
var button = document.querySelector("#btn-click");
var outputDiv = document.querySelector("#out-div");

var url = "https://api.funtranslations.com/translate/pirate.json";

function constructURL(text) {

  return url + "?" + "text=" + text ;
}

function errorHandler(error) {

  console.log("error ", error);
  alert("there's something wrong with server, try some time later");
}

function handleClick() {

  var text = txtInput.value;

  fetch(constructURL(text))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

button.addEventListener("click", handleClick);
