//HOW TO PUT A WEBSITE ON INTERNET SUPER SIMPLE DEV
const xhr=new XMLHttpRequest();

xhr.addEventListener('load',()=>{
console.log(xhr.response);

});

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();


