const links = document.querySelectorAll("a[target=_blank]");

var nbr = 0;
links.forEach((link) => {
    console.log(link);
    nbr++;
});

console.log(nbr);
