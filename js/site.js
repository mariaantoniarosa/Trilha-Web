function validaFaleConosco() {

	var nome = document.frmfaleconosco.txtnome.value;
	var expRegNome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}[A-zÀ-ü]{2,})+$");

	if (!expRegNome.test(nome)) {
		alert("Preencha o campo nome corretamente.");
		document.frmfaleconosco.txtnome.focus();
		return false;
	}

	var fone = document.frmfaleconosco.txtfone.value;
	var expRegFone = new RegExp("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
	if (!expRegFone.test(fone)) {
		alert("Preencha o campo telefone corretamente.")
		document.frmfaleconosco.txtfone.focus();
		return false;
	}

	var email = document.frmfaleconosco.txtemail.value;
	var expRegEmail = new RegExp("^\\S+@\\S+\\.\\S+$");

	if (!expRegEmail.test(email)) {
		alert("Preencha o campo e-mail!");
		document.frmfaleconosco.txtemail.focus();
		return false;
	}
	if (!botao.checked) {

		alert("Por favor, selecione o botão para continuar. ");
		return false;
	}

	if ((sexoF.checked) || (sexoM.checked)) {
		console.log("Sexo da Pessoa Selecionado.");
	} else {
		alert("Por favor selecione seu Sexo!");
		return false;
	}
	if ((sexoF.checked) && (sexoM.checked)) {
		alert("Por favor selecione seu Sexo!");
		return false;
	}

	if (document.frmfaleconosco.selmotivo.value == "") {
		alert("Escolha um motivo!");

		document.frmfaleconosco.selmotivo.focus();
		return false;
	}

	var campo = document.getElementsByName("selproduto")[0];
	if ((document.frmfaleconosco.selmotivo.value == "PR") && (campo.value == "")) {
		alert("Escolha um produto para Informações");
		campo.focus();
		return false;
	}

	var texto = document.frmfaleconosco.txtcomentario.value;
	var expRegTexto = new RegExp("^.{0}$");

	if (expRegTexto.test(texto)) {
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



