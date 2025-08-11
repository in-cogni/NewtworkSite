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
//let lastPosition = 0;
//const headers = Array.from(document.querySelectorAll('h2, h3'));

//function updateHeader()
//{
//    const scrollPosition = window.scrollY;
//    if (Math.abs(scrollPosition - lastPosition) < 100) return;
//    lastPosition = scrollPosition;

//    for (const header of headers)
//    {
//        const rect = header.getBoundingClientRect();
//        if (rect.top <= 100 && rect.bottom >= 0)
//        {
//            document.getElementById(`header`).textContent = header.textContent;
//            break;
//        }
//    }
//}
//window.addEventListener('scroll', () => { requestAnimationFrame(updateHeader);});
const headers = Array.from(document.querySelectorAll('h2, h3'));
const headerEl = document.getElementById('headerText');
let lastActiveHeader = null;

function updateHeader()
{
    let activeHeader = headers.find(header =>
    {
        const rect = header.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 0;
    })
    if (!activeHeader)
    {
        activeHeader = headers.findLast(header =>
        {
            const rect = header.getBoundingClientRect();
            return rect.top <= 0;
        });
    }
    if (activeHeader && activeHeader !== lastActiveHeader)
    {
        headerEl.textContent = activeHeader.textContent;
        lastActiveHeader = activeHeader;
    }
}
let ticking = false;
window.addEventListener('scroll', () =>
{
    if (!ticking)
    {
        window.requestAnimationFrame(() =>
        {
            updateHeader();
            ticking = false;
        });
        ticking = true;
    }
});
updateHeader();