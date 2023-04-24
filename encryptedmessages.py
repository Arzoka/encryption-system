a = "{#*}";
b = "DE";
c = "92";
d = "VA";
e = "KJ";
f = "L9";
g = "[]";
h = ";";
i = "3";
j = "7";
k = "b";
l = "X";
m = "Z";
n = "&";
o = "$";
p = "%";
q = "←";
r = "?";
s = "@";
t = "-";
u = "+";
v = "|";
w = "O";
x = "x";
y = "*";
z = ".";
exlam = "◄";

def dofunkystuff(arg1,string):
    if (arg1 == "encrypt"):
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

    elif (arg1 == "decrypt"):
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

msg = "Hello, welcome to my encryption test! Please type a sentence!";
encmsg = dofunkystuff("encrypt",msg);
print(encmsg);
print('(type "decrypt" to decrypt this message)');
oldin = input("");
if oldin == "decrypt":
    print(dofunkystuff("decrypt",encmsg));
else:
    print("nvm lmao");

while True:
    newin = input("");
    if ("decrypt" in newin):
        fullstr = newin.replace("decrypt","");
        print(dofunkystuff("decrypt",fullstr));
    elif ("encrypt" in newin):
        fullstr = newin.replace("encrypt","");
        print(dofunkystuff("encrypt",fullstr));