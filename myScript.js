let i=0;
let slides= document.getElementsByClassName('recent-slideshow');
showSlide(i);
i++;
setInterval(() => {
    if(i!=4)
    {
        showSlide(i);
        i++;
    }
    else
    {
        i=0;
        showSlide(i);
        i++;
    }
}, 3900);
function showSlide(index)
{
    slides[index].style.display= 'block';
    for(let ind=0;ind<slides.length;ind++)
    {
        if(ind!=index)
        {
            slides[ind].style.display= 'none';
        }
    }
}
