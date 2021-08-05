const num= Math.floor(Math.random()*2);
console.log(num);

function GetCssSheet(num) {
  
  if (num === 0) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
  if (num === 1) 
  {
    document.getElementById('css_sheet').setAttribute('href', `./style/${num}/${num}.css`);
  }
}GetCssSheet(num);