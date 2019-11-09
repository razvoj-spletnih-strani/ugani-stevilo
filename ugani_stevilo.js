document.getElementById("ugani").style.display="none";
document.getElementById("znova").style.display="none";
document.getElementById("igranje").style.display="none";

var nakljucnoStevilo;
var zacetek;
var konec;
var stevilo;
var poskusi = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('zacni').onclick = function() {
	zacetek = document.getElementById("zacetek").value;
	konec = document.getElementById("konec").value;

	if (!zacetek || !konec){
		document.getElementById('obvestilo').innerHTML = "Izpolniti morate vsa polja.";
		return false;
	}
	if (isNaN(zacetek) || isNaN(konec)){
		document.getElementById('obvestilo').innerHTML = "Ena od vrednosti ni število.";
		return false;
	} else {
		if (parseInt(zacetek) >= parseInt(konec)){
			document.getElementById('obvestilo').innerHTML = "Začetno število ne sme biti večje ali enako od končnega.";
			return false;
		}
		nakljucnoStevilo = getRandomInt(parseInt(zacetek), parseInt(konec));
		document.getElementById('obvestilo').innerHTML = "";
		document.getElementById("generiraj").style.display="none";
		document.getElementById("navodila").style.display="none";
		document.getElementById("ugani").style.display="block";
		document.getElementById("poskus").style.display="block";
		document.getElementById("igranje").style.display="block";
		return false;
	}
}

document.getElementById('preveri').onclick = function() {
	stevilo = parseInt(document.getElementById("stevilo").value);
	if (!stevilo){
		document.getElementById('obvestilo').innerHTML = "Vpišite število.";
		return false;
	}
	if(stevilo > nakljucnoStevilo){
		document.getElementById('obvestilo').innerHTML = "Vneseno število je preveliko.";
		poskusi++;
		document.getElementById('poskus').innerHTML = "Poskus: " + poskusi;
		return false;
	} else if (stevilo < nakljucnoStevilo){
		document.getElementById('obvestilo').innerHTML = "Vneseno število je premajhno.";
		poskusi++;
		document.getElementById('poskus').innerHTML = "Poskus: " + poskusi;
		return false;
	} else if (stevilo == nakljucnoStevilo){
		poskusi++;
		document.getElementById("obvestilo").style.display="block";
		document.getElementById('obvestilo').innerHTML = "Čestitamo, uganili ste število v " + poskusi + " poskusih.";
		document.getElementById("poskus").style.display="none";
		document.getElementById("ugani").style.display="none";
		document.getElementById("igranje").style.display="none";
		document.getElementById("znova").style.display="block";
		return false;
	}
}

document.getElementById('znova').onclick = function() {
	document.getElementById('obvestilo').innerHTML = "";
	document.getElementById('poskus').innerHTML = "";
	document.getElementById("znova").style.display="none";
	document.getElementById("generiraj").style.display="block";
	document.getElementById("navodila").style.display="block";
	poskusi=0;
}