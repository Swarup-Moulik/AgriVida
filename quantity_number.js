let cats = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
};
function increase(ia){
    ++cats[ia];
    document.getElementById("q"+ia).innerText = cats[ia];
}
function decrease(fa){  
    if (cats[fa] > 0) {
        cats[fa]--;
    }
    document.getElementById("q" + fa).innerText = cats[fa];
}