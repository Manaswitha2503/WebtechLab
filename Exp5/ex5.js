function cost(){
    let cc = parseInt(document.getElementById("cc").value);
    let bc = parseInt(document.getElementById("bc").value);
    let mc = parseInt(document.getElementById("mc").value);
    let bf = parseInt(document.getElementById("bf").value);
    let order = cc*300 + bc*200 + mc*250 + bf*350;
    let price = order;
    document.getElementById("price").value = "Rs." + price;
}