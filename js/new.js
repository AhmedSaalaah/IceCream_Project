var button1=document.getElementsByClassName("button")[0]
function colors()
{
    button1.style.color="blue"
    button1.style.cursor="pointer"
}
function colors1()
{
    button1.style.color="white"
}
button1.addEventListener('mouseenter',colors)
button1.addEventListener('mouseleave',colors1)