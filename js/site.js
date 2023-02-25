function validaFaleConosco() {
	if (document.frmfaleconosco.txtnome.value == "") {
		alert("Preencha o campo nome!");
		document.frmfaleconosco.txtnome.focus();
		return false;
	} else if (document.frmfaleconosco.txtfone.value == "") {
		alert("Preencha o campo telone!");
		document.frmfaleconosco.txtfone.focus();
		return false;

	} else if (document.frmfaleconosco.txtemail.value == "") {
		alert("Preencha o campo e-mail!");
		document.frmfaleconosco.txtemail.focus();
		return false;

	} else if (document.frmfaleconosco.selmotivo.value == 0) {
		alert("Escolha um motivo!");
		document.frmfaleconosco.selmotivo.focus();

		if ((selmotivo == 3) && (document.frmfaleconosco.opcaoProduto == 0)) {
			alert("Preencha o campo!")
		}
		return false;




	} else if (document.frmfaleconosco.txtcomentario.value == "") {
		alert("Por favor faça um comentário!");
		document.frmfaleconosco.txtcomentario.focus();
		return false;
	}

	return true;
}

function verificaMotivo(motivo) {
	var elemento = document.getElementById("opcaoProduto");


	if (motivo == "PR") {
		var select = document.createElement("select");
		select.setAttribute("name", "selproduto");

		var option = document.createElement("option");
		option.setAttribute("value", "");
		var texto = document.createTextNode("Escolha");
		option.appendChild(texto);
		select.appendChild(option);


		var option = document.createElement("option");
		option.setAttribute("value", "FR");
		var texto = document.createTextNode("Freezer");
		option.appendChild(texto);
		select.appendChild(option);

		var option = document.createElement("option");
		option.setAttribute("value", "GE");
		var texto = document.createTextNode("Geladeira");
		option.appendChild(texto);
		select.appendChild(option);
		elemento.appendChild(select);


	} else {
		if (elemento.firstChild)
			elemento.removeChild(elemento.firstChild);

	}




}