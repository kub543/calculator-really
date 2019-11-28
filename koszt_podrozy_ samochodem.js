/*function koszt() {
	
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	//var c = document.getElementById("liczba3").value;
	//var d = document.getElementById("liczba4").value;
	
	if (liczba1 == "" || liczba2 == "") {
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić  liczby.";
	}
		else { liczba1 = parseFloat(liczba1);
				liczba2 = parseFloat(liczba2);
				//liczba4 = parseFloat(liczba4);
		}
		//switch(dzialanie) {
			//case: 1
			var razy = liczba1*liczba2;
			document.getElementById("wynik").innerHTML = razy;
		
}*/
function suma()
{
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	
	if (liczba1 == "" || liczba2 == "") {
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
	}
		else { liczba1 = parseFloat(liczba1);
				liczba2 = parseFloat(liczba2);
				
		var suma = liczba1 + liczba2;
		document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ suma;
		}
		
		
	
}





