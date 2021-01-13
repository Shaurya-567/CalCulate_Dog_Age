let hyears = document.getElementById('hyears');
for(let i=0;i<101;i++)
{
  let option = document.createElement('option');
  option.textContent = i;
  hyears.appendChild(option);
}

function calculate(){
let human=parseInt(document.getElementById("inp").value);
let humanmonth=parseInt(document.getElementById("imp").value);
let dyear2;
let dmonth;
let res3;
let resmonth=(human*12)+humanmonth;
let res2;

if(resmonth>0)
{
if(resmonth<25)
{
  dmonth=resmonth*10.5;
}
else{
  dyear2=24*10.5;
  dmonth=((resmonth-24)*4)+dyear2;

}
res2=Math.floor(dmonth/12);
 res3=Math.round(((dmonth/12)%1)*12);
document.getElementById("out").innerHTML=res2+" years "+ res3+" months.";


}
else
{
  alert("Invalid Ages");
}
}

function change(elem)
{
  let text=document.getElementById("inp");
  let text2=document.getElementById("imp");
  let check=text.value;
  let check2=text2.value;
  if(check==0 && check2==0)
  {
     let errdiv=document.getElementById("d1");
     errdiv.innerHTML="Both are not be Zero";
     errdiv.className="class1";
     let btn1=document.getElementById("btn");
     btn1.disabled=true;
  }
  else{

    let errdiv=document.getElementById("d1");
    errdiv.innerHTML="";
    errdiv.className="";
    let btn1=document.getElementById("btn");
    btn1.disabled=false;
  }
}
