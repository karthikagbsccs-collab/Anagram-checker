let width=0;
function startProgress(){
 width+=10;
 document.getElementById("progressBar").style.width=width+"%";
 document.getElementById("progressBar").innerHTML=width+"%";
}
function clock(){
 let d=new Date();
 document.getElementById("clock").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}
clock();
setInterval(clock,1000);

let words=["listen","silent","eat","tea","god","dog","hello","world","cat","act"];

function checkAnagram(){
 let anagram="",notAnagram="";
 for(let i=0;i<words.length;i+=2){
  let word1=words[i],word2=words[i+1];
  if(word1.split("").sort().join("")==word2.split("").sort().join(""))
   anagram+=word1+" - "+word2+"<br>";
  else
   notAnagram+=word1+" - "+word2+"<br>";
 }
 document.getElementById("result").innerHTML="<h3>Anagram</h3>"+anagram+"<h3>Not Anagram</h3>"+notAnagram;
}
