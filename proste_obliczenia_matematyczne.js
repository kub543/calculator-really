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

function roznica() {
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	
	if (liczba1 == "" || liczba2 == "") {
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
	}
		else { liczba1 = parseFloat(liczba1);
				liczba2 = parseFloat(liczba2);
				
		var roznica = liczba1 - liczba2;
		document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ roznica;
		}
}
function iloczyn() {
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	
	if (liczba1 == "" || liczba2 == "") {
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
	}
		else { liczba1 = parseFloat(liczba1);
				liczba2 = parseFloat(liczba2);
				
		var iloczyn = liczba1 * liczba2;
		document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ iloczyn;
		}
}
function iloraz() {
	var liczba1 = document.getElementById("liczba1").value;
	var liczba2 = document.getElementById("liczba2").value;
	
	if (liczba1 == "" || liczba2 == "") {
		document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
	}
		else { liczba1 = parseFloat(liczba1);
				liczba2 = parseFloat(liczba2);
			if (liczba2 == 0) {
				document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero";
			}	
				else {
		var iloraz = liczba1 / liczba2;
		document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ iloraz;
		}
}
}