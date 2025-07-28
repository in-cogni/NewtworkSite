// JavaScript source code
function SwitchBackground()
{
    let switchButton = document.getElementById("switchBackground");
    let delay = 2;
    document.body.style.transition = `background ${delay}s ease, color ${delay}s ease`;
    switchButton.style.transition = `background-image ${delay}s ease, filter ${delay}s ease`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}
