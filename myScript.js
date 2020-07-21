console.log('Hlll');
let i = 2;
let s = document.getElementById('recent-slideshow');
setInterval(() =>
{
    if (i <= 4)
    {
        s.classList.add('fade');
        s.innerHTML = `<img src="images/${i}.jpg" alt="${i}">`;
        setTimeout(() => 
        {
            s.classList.remove('fade');
        }, 500);
        ++i;
    }
    else
    {
        i=1;
    }
}, 4000);