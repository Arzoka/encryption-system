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
const k = "b";
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

function dofunkystuff(arg1,string) {
    if (arg1 == "encrypt") {
        newstring = string.replace("a",a);
        newstring = newstring.replace("b",b);
        newstring = newstring.replace("c",c);
        newstring = newstring.replace("d",d);
        newstring = newstring.replace("e",e);
        newstring = newstring.replace("f",f);
        newstring = newstring.replace("g",g);
        newstring = newstring.replace("h",h);
        newstring = newstring.replace("i",i);
        newstring = newstring.replace("j",j);
        newstring = newstring.replace("k",k);
        newstring = newstring.replace("l",l);
        newstring = newstring.replace("m",m);
        newstring = newstring.replace("n",n);
        newstring = newstring.replace("o",o);
        newstring = newstring.replace("p",p);
        newstring = newstring.replace("q",q);
        newstring = newstring.replace("r",r);
        newstring = newstring.replace("s",s);
        newstring = newstring.replace("t",t);
        newstring = newstring.replace("u",u);
        newstring = newstring.replace("v",v);
        newstring = newstring.replace("w",w);
        newstring = newstring.replace("x",x);
        newstring = newstring.replace("y",y);
        newstring = newstring.replace("z",z);
        newstring = newstring.replace("!",exlam);
        return newstring;
    }

    if (arg1 == "decrypt") {
        newstring = string.replace(a,"a");
        newstring = newstring.replace(b,"b");
        newstring = newstring.replace(c,"c");
        newstring = newstring.replace(d,"d");
        newstring = newstring.replace(e,"e");
        newstring = newstring.replace(f,"f");
        newstring = newstring.replace(g,"g");
        newstring = newstring.replace(h,"h");
        newstring = newstring.replace(i,"i");
        newstring = newstring.replace(j,"j");
        newstring = newstring.replace(k,"k");
        newstring = newstring.replace(l,"l");
        newstring = newstring.replace(m,"m");
        newstring = newstring.replace(n,"n");
        newstring = newstring.replace(o,"o");
        newstring = newstring.replace(p,"p");
        newstring = newstring.replace(q,"q");
        newstring = newstring.replace(r,"r");
        newstring = newstring.replace(s,"s");
        newstring = newstring.replace(t,"t");
        newstring = newstring.replace(u,"u");
        newstring = newstring.replace(v,"v");
        newstring = newstring.replace(w,"w");
        newstring = newstring.replace(x,"x");
        newstring = newstring.replace(y,"y");
        newstring = newstring.replace(z,"z");
        newstring = newstring.replace(exlam,"!");
        return newstring;
    }
}

document.getElementById("encrypt-b").onclick = function() {
    am = document.getElementById("inpamount").value;
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
    am = document.getElementById("inpamount").value;
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