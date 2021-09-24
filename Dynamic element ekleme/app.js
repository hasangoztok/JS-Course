//yeni element oluşturma
{/* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>   */}

const newLink =document.createElement("a");

const newLink2 =document.createElement("a");

const carbody=document.getElementsByClassName("card-body")[1];

const cardbody2=document.getElementsByClassName("card-body")[0];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com/";
newLink.target="_blank";

newLink2.id="clear-todos";
newLink2.className="btn btn-warning";
newLink2.href="https://www.instagram.com/";
newLink2.target="_blank";

//text content
// newLink.textContent="google"; //içinde başka html etiketleri olabileceği için kullanımı çok mantıklı değil!!! 

// carbody.textContent="sdhjfsdjkf";//tüm elementleri silip bu yazıyı yerine koyar, bu yüzden kullanımı uygun değil!

// const text=document.createTextNode("w'up?");
// carbody.appendChild(text);
// console.log(carbody);

newLink.appendChild(document.createTextNode("google"));
carbody.appendChild(newLink);

newLink2.appendChild(document.createTextNode("xdxdxd"));
cardbody2.appendChild(newLink2);

console.log(newLink);