String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
}

fetch('enc.json')
  .then(response => response.json())
  .then(data => {

    function dofunkystuff(arg1,string) {
        if (arg1 == "encrypt") {
            newstring = string.replaceAll("a",data.encr.a);
            newstring = newstring.replaceAll("b",data.encr.b);
            newstring = newstring.replaceAll("c",data.encr.c);
            newstring = newstring.replaceAll("d",data.encr.d);
            newstring = newstring.replaceAll("e",data.encr.e);
            newstring = newstring.replaceAll("f",data.encr.f);
            newstring = newstring.replaceAll("g",data.encr.g);
            newstring = newstring.replaceAll("h",data.encr.h);
            newstring = newstring.replaceAll("i",data.encr.i);
            newstring = newstring.replaceAll("j",data.encr.j);
            newstring = newstring.replaceAll("k",data.encr.k);
            newstring = newstring.replaceAll("l",data.encr.l);
            newstring = newstring.replaceAll("m",data.encr.m);
            newstring = newstring.replaceAll("n",data.encr.n);
            newstring = newstring.replaceAll("o",data.encr.o);
            newstring = newstring.replaceAll("p",data.encr.p);
            newstring = newstring.replaceAll("q",data.encr.q);
            newstring = newstring.replaceAll("r",data.encr.r);
            newstring = newstring.replaceAll("s",data.encr.s);
            newstring = newstring.replaceAll("t",data.encr.t);
            newstring = newstring.replaceAll("u",data.encr.u);
            newstring = newstring.replaceAll("v",data.encr.v);
            newstring = newstring.replaceAll("w",data.encr.w);
            newstring = newstring.replaceAll("x",data.encr.x);
            newstring = newstring.replaceAll("y",data.encr.y);
            newstring = newstring.replaceAll("z",data.encr.z);
            newstring = newstring.replaceAll("!",data.encr.exlam);
            return newstring;
        }

        if (arg1 == "decrypt") {
            newstring = string.replaceAll(data.encr.a,"a");
            newstring = newstring.replaceAll(data.encr.b,"b");
            newstring = newstring.replaceAll(data.encr.c,"c");
            newstring = newstring.replaceAll(data.encr.d,"d");
            newstring = newstring.replaceAll(data.encr.e,"e");
            newstring = newstring.replaceAll(data.encr.f,"f");
            newstring = newstring.replaceAll(data.encr.g,"g");
            newstring = newstring.replaceAll(data.encr.h,"h");
            newstring = newstring.replaceAll(data.encr.i,"i");
            newstring = newstring.replaceAll(data.encr.j,"j");
            newstring = newstring.replaceAll(data.encr.k,"k");
            newstring = newstring.replaceAll(data.encr.l,"l");
            newstring = newstring.replaceAll(data.encr.m,"m");
            newstring = newstring.replaceAll(data.encr.n,"n");
            newstring = newstring.replaceAll(data.encr.o,"o");
            newstring = newstring.replaceAll(data.encr.p,"p");
            newstring = newstring.replaceAll(data.encr.q,"q");
            newstring = newstring.replaceAll(data.encr.r,"r");
            newstring = newstring.replaceAll(data.encr.s,"s");
            newstring = newstring.replaceAll(data.encr.t,"t");
            newstring = newstring.replaceAll(data.encr.u,"u");
            newstring = newstring.replaceAll(data.encr.v,"v");
            newstring = newstring.replaceAll(data.encr.w,"w");
            newstring = newstring.replaceAll(data.encr.x,"x");
            newstring = newstring.replaceAll(data.encr.y,"y");
            newstring = newstring.replaceAll(data.encr.z,"z");
            newstring = newstring.replaceAll(data.encr.exlam,"!");
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

})