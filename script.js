function generateQRCode() {
  const link = document.getElementById("link").value;
  const qrCodeConteiner = document.getElementById("qrcode");
  qrCodeConteiner.innerHTML = "";
  

  if (link.trim() !== "") {
    document.querySelector('.qr-container').classList.add('qr-visible')
    const qr = new QRCode(qrCodeConteiner, {
      text: link,
      width: 150,
      height: 150,
      colorDark : "#000",
	    colorLight : "#fff",
    });
    setTimeout(() => { 
      document.getElementById("download").style.display = "block";
      const mensagemSucesso = document.createElement("p");
      mensagemSucesso.textContent = "QR code criado com sucesso ;)"
      mensagemSucesso.style.color = "black";
      mensagemSucesso.style.fontSize = "0.6em"
      mensagemSucesso.style.maxWidth = "15ch"
      mensagemSucesso.style.marginTop = "10px";
      mensagemSucesso.style.marginLeft = "38px";
      qrCodeConteiner.appendChild(mensagemSucesso); 
    }, 500);
  } else {
    alert("Coloque um link válido!");
  }
}

function downloadQRCode() {
  const qrCodeContainer = document
    .getElementById("qrcode")
    .getElementsByTagName("img")[0];
  if (qrCodeContainer) {
    const link = document.createElement("a");
    link.href = qrCodeContainer.src;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
