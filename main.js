

var box=document.getElementById("bill-amount")
console.log(box);
var box1=document.getElementById("tips")
console.log(box1);
var box2=document.getElementById("tips-rs")
var box3=document.getElementById("total")
var butt=document.getElementById("btn")
console.log(butt);


btn.addEventListener("click",function(e){
  e.preventDefault();

  var con1=box.value;
  var con2=box1.value;

  console.log(con1,con2);

  var percentage=Number(con1)*Number(con2)/100;
  box2.value=percentage;

  var total=Number(con1)+Number(percentage);
  box3.value=total;

});




