let qr = new QRious({
    element: document.getElementById("qr-code"),
    value: "https://fcrh.me",
    size: 500
});

const eventUpdate = (e) => {
    const {value} = e.target;

    qr.value = value;
}

const input = document.getElementById("ipt-value");
input.onchange = eventUpdate;
input.onkeydown = eventUpdate;
input.onkeyup = eventUpdate;

document.getElementById("btn-download").onclick = () => {
    qr.value = input.value;
    let dataURL = qr.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "qr-code.png";
    link.click();
    link.remove();
}

document.getElementById("ipt-transparent").onchange = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
        qr.backgroundAlpha = 0.0
    } else {
        qr.backgroundAlpha = 1.0
    }
}

