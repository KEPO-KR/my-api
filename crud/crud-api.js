let arr = [];
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
    arr.splice(index+1,index);
    id.innerHTML = '';
  }
  console.log(arr);
}
//제작자:sangho
