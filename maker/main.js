function toCode() {
  var pytanie, kodPytanie;
  var odpowiedzA, odpowiedzB, odpowiedzC, odpowiedzD, kodOdpowiedzA, kodOdpowiedzB, kodOdpowiedzC, kodOdpowiedzD;
  var checkedA, checkedB, checkedC, checkedD, kodChecked;
  for (var i = 1; i < 12; i++) {
    pytanie = document.getElementById('question' + i).value;
    kodPytanie = document.getElementById('Iquestion' + i).innerHTML = pytanie;
    odpowiedzA = document.getElementById('a' + i + 'A').value;
    kodOdpowiedzA = document.getElementById('Ia' + i + 'A').innerHTML = odpowiedzA;
    odpowiedzB = document.getElementById('a' + i + 'B').value;
    kodOdpowiedzB = document.getElementById('Ia' + i + 'B').innerHTML = odpowiedzB;
    odpowiedzC = document.getElementById('a' + i + 'C').value;
    kodOdpowiedzC = document.getElementById('Ia' + i + 'C').innerHTML = odpowiedzC;
    odpowiedzD = document.getElementById('a' + i + 'D').value;
    kodOdpowiedzD = document.getElementById('Ia' + i + 'D').innerHTML = odpowiedzD;
    kodChecked = document.getElementById('rightIndex' + i);
    if ( document.getElementById('a' + i + 'AC').checked ) {
      kodChecked.innerHTML = "0";
    } else if ( document.getElementById('a' + i + 'BC').checked ) {
      kodChecked.innerHTML = "1";
    } else if ( document.getElementById('a' + i + 'CC').checked ) {
      kodChecked.innerHTML = "2";
    } else if ( document.getElementById('a' + i + 'DC').checked ) {
      kodChecked.innerHTML = "3";
    }
  }
}

function selectText() {
  window.getSelection().selectAllChildren(
    document.getElementById("textToCopy")
);
}