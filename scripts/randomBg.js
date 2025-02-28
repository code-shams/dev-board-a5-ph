themeBtn.addEventListener("click", function(){
    setRandomBg();
})
function setRandomBg(){
    const backgrounds = ["purple", "teal", "cyan", "pink", "emerald", "slate", "rose", "red","sky", "violet", "gray", "indigo", "amber", "lime"];
    let bgNumber = Math.floor(Math.random()*backgrounds.length);
    const background = `bg-${backgrounds[bgNumber]}-200`;
    const body = document.getElementById("body");
    for (const bg of backgrounds) {
        body.classList.remove(`bg-${bg}-200`);
    }
    body.classList.remove("bg-violet-50");
    body.classList.add(background);
}