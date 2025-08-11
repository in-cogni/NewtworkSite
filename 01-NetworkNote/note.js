// JavaScript source code
function SwitchBackground()
{
    let switchButton = document.getElementById("switchBackground");
    let delay = 2;
    document.body.style.transition = `background ${delay}s ease, color ${delay}s ease`;
    switchButton.style.transition = `background-image ${delay}s ease, filter ${delay}s ease`;
    document.body.className = document.body.className === "light" ? "dark" : "light";
}
function btnContent()
{
    let caret = document.getElementById("caret");
    let textContent = document.getElementById("textContent");

    const isHidden = window.getComputedStyle(textContent).display === 'none';
    textContent.style.display = isHidden ? 'block' : 'none';
    caret.style.transform = isHidden ? `rotate(180deg)` : `rotate(0deg)`;
}
const btnContentel = document.getElementById(`btnContent`);
btnContentel.addEventListener(`mouseenter`, function () { textContentShadow(`#bda4ff 0 0 2px inset, #bda4ff 0 0 3px, #bda4ff 5px 0 8px -3px`, `#ad8f00 0 0 2px inset, #ad8f00 0 0 3px, #ad8f00 5px 0 8px -3px`) });
btnContentel.addEventListener(`mouseleave`, function () { textContentShadow(`none`, `none`) });
function textContentShadow(box1, box2)
{
    let textContent = document.getElementById("textContent");
    textContent.style.boxShadow = document.body.className === "light" ?  box1 : box2 ;
}