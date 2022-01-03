function str2list(word) {
  let list = [];
  for (var elem of word) {
    list.push(elem);
  }
  return list;
}

function smol(word) {
  let listword = str2list(word);
  for (var i = 0; i < listword.length; i++) {
    listword[i] = listword[i].toLowerCase();
  }
  let b = "";
  for (var char of listword) {
    b = b + char
  }
  return b
}


function conv(l, stri) {
  lisw=str2list(stri);
  for (var i=0; i< l.length; i++) {
    if (l[i]==1) {
      lisw[i] = lisw[i].toUpperCase();
    }
  }
  return lisw
}

function fill(n) {
  l=[];
  for (var i=0; i < n; i++) {
    l.push(0)
  }
  return l
}
//console.log(conv([0,0,1,1,1],'hello'))

function bin(n) {
  if (n == 0) {
    return [0,]
  } else {
    const lconst = Math.floor(Math.log2(n));
    let m=n;
    let list = [];
    l = Math.floor(Math.log2(m));
    list = fill(l+1);
    list[0]=1;
    while (m>0) {
      l = Math.floor(Math.log2(m));
      list[lconst-l]=1;
      m=m-Math.pow(2,l);
    }
    return list
  }
}


function caps(word) {
  woe = smol(word);
  lenth = woe.length;
  masternumlist = fill(lenth);
  listofbins = [];
  for (var i = 0; i < Math.pow(2,lenth); i++) {
    binarynum = bin(i);
    listofbins.push(binarynum);
  }
  let newlistofbins = [];
  for (var ilist of listofbins) {
    diff = masternumlist.length - ilist.length;
    dummylist = fill(diff);
    newilist = dummylist.concat(ilist);
    newlistofbins.push(newilist);
  }
  let final = [];
  for (var list of newlistofbins) {
    Word = conv(list, woe);
    final.push(Word);
  }
  let Final = [];
  for (var el of final) {
    let a = "";
    for (i of el) {
      a = a + i
    }
    Final.push(a)
  }
  return Final
}

console.log(caps("hello"))
let myvar =5
