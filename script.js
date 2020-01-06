window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("Siden Vises");

    clickMenu();

    document.querySelector("#menuknap").addEventListener("click", clickMenu);

    document.querySelector("#michelle").addEventListener("mouseover", mouseOverBillede)

    document.querySelector("#cafemichelle").addEventListener("mouseover", mouseOverBillede2)
}

function clickMenu() {
    console.log("clickMenu");

    document.querySelector("#burger").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", clickFjern);
}


function clickFjern() {
    console.log("clickFjern");

    document.querySelector("#burger").classList.add("hidden");

    document.querySelector("#menuknap").removeEventListener("click", clickFjern);
    document.querySelector("#menuknap").addEventListener("click", clickMenu);
}

function mouseOverBillede() {
    console.log("mouseOverBillede");

    document.querySelector("#michelle").classList.add("hidden");
    document.querySelector("#blomster").classList.remove("hidden");


    document.querySelector("#blomster").classList.add("fade");
    document.querySelector("#blomster").addEventListener("mouseout", mouseOutBillede);
}

function mouseOutBillede() {
    console.log("mouseOutBillede");

    document.querySelector("#blomster").classList.add("hidden");

    document.querySelector("#michelle").classList.add("fade");
    document.querySelector("#michelle").classList.remove("hidden");
}

function mouseOverBillede2() {
    console.log("mouseOverBillede2");

    document.querySelector("#cafemichelle").classList.add("hidden");
    document.querySelector("#lillemichelle").classList.remove("hidden");


    document.querySelector("#lillemichelle").classList.add("fade");
    document.querySelector("#lillemichelle").addEventListener("mouseout", mouseOutBillede2);
}

function mouseOutBillede2() {
    console.log("mouseOutBillede2");

    document.querySelector("#lillemichelle").classList.add("hidden");

    document.querySelector("#cafemichelle").classList.add("fade");
    document.querySelector("#cafemichelle").classList.remove("hidden");
}
