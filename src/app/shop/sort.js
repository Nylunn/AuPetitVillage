


let field = document.querySelector('.items');
let fi = Array.from(field.children);
let select = document.getElementById('select');
let ar = [];

for(let i of li)
{
    const last = i.lastElementChild;
    const x =  last.textContent.trim();
    const y = Number(x.substring(1));
    i.setAttribute('data-price', y);
    ar.push(i);
}

select.onchange = sortingValue;

function sortingValue()
{
    if (this.value === 'Default') {
        while(field.firstChild){
            field.removeChild(field.firstChild);
        }
        field.append(...ar);
    }
    if (this.value === 'LowToHigh'){
        sortElem(field, li, true);
    }
    
    if (this.value === 'HighToLow'){
        sortElem(field, li, false);
    }
}

function sortElem(field, li, asc)
{
    let dm, sortLi;
    dm = asc ? 1 : -1;
    sortLi = li.sort((a,b)=>{
        const ax =  a.getAttribute('data-price');
        const bx =  a.getAttribute('data-price');

        return ax> bx ? (1*dm) : (-1*dm);
    })
    while(field.firstChild){
        field.removeChild(field.firstChild);
    }
    field.append(...sortLi);

}