let arr = ['text'];
function nb(p,z) {
  document.getElementById(p).innerHTML = '';
  for (let i = 0; i < arr.length; i++) {
    let a = 'crud(\"'+z+'\","0","0",\"r\",'+i+')';
    console.log(a);
    let d = '<input type=\"button\" value=\"'+i+'\" onclick='+a+'>';
    console.log(d);
    document.getElementById(p).innerHTML+=d;
  }
}
function crud(i,title,text,ops,index) {
  let id = document.getElementById(i);
  let html = '<h2>'+title+'</h2><br/><span>'+text+'</span>';
  if (ops=='c') {
    arr.push(html);
    id.innerHTML = html;
  } else if (ops == 'r') {
    id.innerHTML = arr[index];
  } else if (ops == 'u') {
    arr[index]=html;
    id.innerHTML = html;
  } else if (ops == 'd') {
    arr[index] = '<h2>404 error</h2><br/><span>게시글이 존재하지 않음</span>';
    id.innerHTML = '';
  }
  console.log(arr);
}
//제작자:sangho
