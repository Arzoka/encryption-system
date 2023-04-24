const a = "{#*}";
const b = "DE";
const c = "92";
const d = "VA";
const e = "KJ";
const f = "L9";
const g = "[]";
const h = ";";
const i = "3";
const j = "7";
const k = "↔";
const l = "X";
const m = "Z";
const n = "&";
const o = "$";
const p = "%";
const q = "←";
const r = "?";
const s = "@";
const t = "-";
const u = "+";
const v = "|";
const w = "O";
const x = "x";
const y = "*";
const z = ".";
const exlam = "◄";

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function dofunkystuff(arg1,string) {
    if (arg1 == "encrypt") {
        newstring = string.replaceAll("a",a);
        newstring = newstring.replaceAll("b",b);
        newstring = newstring.replaceAll("c",c);
        newstring = newstring.replaceAll("d",d);
        newstring = newstring.replaceAll("e",e);
        newstring = newstring.replaceAll("f",f);
        newstring = newstring.replaceAll("g",g);
        newstring = newstring.replaceAll("h",h);
        newstring = newstring.replaceAll("i",i);
        newstring = newstring.replaceAll("j",j);
        newstring = newstring.replaceAll("k",k);
        newstring = newstring.replaceAll("l",l);
        newstring = newstring.replaceAll("m",m);
        newstring = newstring.replaceAll("n",n);
        newstring = newstring.replaceAll("o",o);
        newstring = newstring.replaceAll("p",p);
        newstring = newstring.replaceAll("q",q);
        newstring = newstring.replaceAll("r",r);
        newstring = newstring.replaceAll("s",s);
        newstring = newstring.replaceAll("t",t);
        newstring = newstring.replaceAll("u",u);
        newstring = newstring.replaceAll("v",v);
        newstring = newstring.replaceAll("w",w);
        newstring = newstring.replaceAll("x",x);
        newstring = newstring.replaceAll("y",y);
        newstring = newstring.replaceAll("z",z);
        newstring = newstring.replaceAll("!",exlam);
        return newstring;
    }

    if (arg1 == "decrypt") {
        newstring = string.replaceAll(a,"a");
        newstring = newstring.replaceAll(b,"b");
        newstring = newstring.replaceAll(c,"c");
        newstring = newstring.replaceAll(d,"d");
        newstring = newstring.replaceAll(e,"e");
        newstring = newstring.replaceAll(f,"f");
        newstring = newstring.replaceAll(g,"g");
        newstring = newstring.replaceAll(h,"h");
        newstring = newstring.replaceAll(i,"i");
        newstring = newstring.replaceAll(j,"j");
        newstring = newstring.replaceAll(k,"k");
        newstring = newstring.replaceAll(l,"l");
        newstring = newstring.replaceAll(m,"m");
        newstring = newstring.replaceAll(n,"n");
        newstring = newstring.replaceAll(o,"o");
        newstring = newstring.replaceAll(p,"p");
        newstring = newstring.replaceAll(q,"q");
        newstring = newstring.replaceAll(r,"r");
        newstring = newstring.replaceAll(s,"s");
        newstring = newstring.replaceAll(t,"t");
        newstring = newstring.replaceAll(u,"u");
        newstring = newstring.replaceAll(v,"v");
        newstring = newstring.replaceAll(w,"w");
        newstring = newstring.replaceAll(x,"x");
        newstring = newstring.replaceAll(y,"y");
        newstring = newstring.replaceAll(z,"z");
        newstring = newstring.replaceAll(exlam,"!");
        return newstring;
    }
}

document.getElementById("encrypt-b").onclick = function() {
    am = 1;
    if (am > 0) {
        for (let i = 0; i < am; i++) {
            if (i == 0) {
                document.getElementById("endresult").innerHTML = dofunkystuff("encrypt",document.getElementById("inp").value);
            }
            else{
                document.getElementById("endresult").innerHTML = dofunkystuff("encrypt",document.getElementById("endresult").innerHTML);
            }
        }
    }
    else{
        document.getElementById("endresult").innerHTML = "ERROR! Please specify an amount of times to encrypt!";
    }
}

document.getElementById("decrypt-b").onclick = function() {
    am = 1;
    if (am > 0) {
        for (let i = 0; i < am; i++) {
            if (i == 0) {
                document.getElementById("endresult").innerHTML = dofunkystuff("decrypt",document.getElementById("inp").value);
            }
            else{
                document.getElementById("endresult").innerHTML = dofunkystuff("decrypt",document.getElementById("endresult").innerHTML);
            }
        }
    }
    else{
        document.getElementById("endresult").innerHTML = "ERROR! Please specify an amount of times to decrypt!";
    }
}