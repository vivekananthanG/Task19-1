document.addEventListener("DOMContentLoaded", function () {

let body=document.getElementById("calc");

let h1=document.createElement("h1");
h1.setAttribute("id","title")
h1.innerText="Calculator";
body.appendChild(h1);

let p=document.createElement("p");
p.setAttribute("id","description")
p.innerText="Design calculator with Javascript";
body.appendChild(p);

let sec=document.createElement("section");
body.appendChild(sec);

let div=document.createElement("div");
div.setAttribute("class","container");
sec.appendChild(div);

let div1=document.createElement("div");
div1.setAttribute("id","mem-indicator");
div.appendChild(div1);

let div2=document.createElement("div");
let input=document.createElement("input");
input.setAttribute("id","result");
input.setAttribute("placeholder","0");
div.appendChild(div2);
div2.appendChild(input);

let div3=document.createElement("div");
div3.setAttribute("class","buttons");
div.appendChild(div3);

let div31=document.createElement("button");
div31.setAttribute("class","button");
div31.innerHTML="M+";
div3.appendChild(div31);

let div32=document.createElement("button");
div32.setAttribute("class","button");
div32.innerHTML="M-";
div3.appendChild(div32);

let div33=document.createElement("button");
div33.setAttribute("class","button");
div33.innerHTML="MC";
div3.appendChild(div33);

let div34=document.createElement("button");
div34.setAttribute("class","button");
div34.innerHTML="MR";
div3.appendChild(div34);

let div35=document.createElement("button");
div35.setAttribute("class","button");
div35.setAttribute("id","clear");
div35.innerHTML="C";
div3.appendChild(div35);

let div36=document.createElement("button");
div36.setAttribute("class","button");
div36.innerHTML="&larr;";
div3.appendChild(div36);

let div37=document.createElement("button");
div37.setAttribute("class","button");
div37.innerHTML="%";
div3.appendChild(div37);

let div38=document.createElement("button");
div38.setAttribute("class","button");
div38.innerHTML="*";
div3.appendChild(div38);

let div39=document.createElement("button");
div39.setAttribute("class","button");
div39.innerHTML="7";
div3.appendChild(div39);

let div40=document.createElement("button");
div40.setAttribute("class","button");
div40.innerHTML="8";
div3.appendChild(div40);

let div41=document.createElement("button");
div41.setAttribute("class","button");
div41.innerHTML="9";
div3.appendChild(div41);

let div42=document.createElement("button");
div42.setAttribute("class","button");
div42.innerHTML="/";
div3.appendChild(div42);

let div43=document.createElement("button");
div43.setAttribute("class","button");
div43.innerHTML="4";
div3.appendChild(div43);

let div44=document.createElement("button");
div44.setAttribute("class","button");
div44.innerHTML="5";
div3.appendChild(div44);

let div45=document.createElement("button");
div45.setAttribute("class","button");
div45.innerHTML="6";
div3.appendChild(div45);

let div46=document.createElement("button");
div46.setAttribute("class","button");
div46.setAttribute("id","subtract");
div46.innerHTML="-";
div3.appendChild(div46);

let div47=document.createElement("button");
div47.setAttribute("class","button");
div47.setAttribute("id","1");
div47.innerHTML="1";
div3.appendChild(div47);

let div48=document.createElement("button");
div48.setAttribute("class","button");
div48.setAttribute("id","2");
div48.innerHTML="2";
div3.appendChild(div48);

let div49=document.createElement("button");
div49.setAttribute("class","button");
div49.setAttribute("id","3");
div49.innerHTML="3";
div3.appendChild(div49);

let div50=document.createElement("button");
div50.setAttribute("class","button");
div50.setAttribute("id","add");
div50.innerHTML="+";
div3.appendChild(div50);

let div51=document.createElement("button");
div51.setAttribute("class","button");
div51.innerHTML="0";
div3.appendChild(div51);

let div52=document.createElement("button");
div52.setAttribute("class","button");
div52.innerHTML="00";
div3.appendChild(div52);

let div53=document.createElement("button");
div53.setAttribute("class","button");
div53.innerHTML=".";
div3.appendChild(div53);

let div54=document.createElement("button");
div54.setAttribute("id","equal");
div54.setAttribute("class","button");
div54.innerHTML="=";
div3.appendChild(div54);

var mem=0;
let display = document.getElementById('result');

document.addEventListener('keypress', function(){
    console.log(display.value)
    let num=isFinite(display.value);
    if(num===false)
    {
       alert("Only numbers are allowed!!!");
    }
});

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    
    button.addEventListener('click', (e) => {
        console.log(e.target.innerText)
        switch(e.target.innerText){

            case 'C':
                display.value = '';
                break;

            case '=':
                try{
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error"
                }
                break;

            case '←':
                if (display.value){
                   display.value = display.value.slice(0, -1);
                }
                break;

            case 'M+':
                    if(parseFloat(display.value)>=0){
                    mem += parseFloat(display.value);
                    console.log(mem)
                    break;
                    }
                    else{
                        mem = 0;
                        break;
                    }
            case 'M-':
                     if(parseFloat(display.value)>=0){
                    mem -= parseFloat(display.value);
                    console.log(mem)
                    break;
                     }
                     else{
                        mem = 0;
                        break;
                    }
            case 'MC':
                    mem = 0;
                    break;
            case 'MR':
                    let conditions=['+','-','*','/','%'];
                    let txt=display.value;
                    if(conditions.some(el=>txt.includes(el))){
                    display.value+=mem;
                    console.log(display.value)
                    break;
                }
                else{
                    display.value=""
                    display.value+=mem;
                    break;
                }

            default:    
                display.value += e.target.innerText;
        }

        if (mem) {
            document.getElementById("mem-indicator").innerHTML='M';
          } else {
            document.getElementById("mem-indicator").innerHTML='';
          }

    });
});
});
