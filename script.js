const text = document.querySelector('.title');
const text2 = document.querySelector('.someText')
const changeColor = document.querySelector(".changeColor");


//text.style.color = "blue";
text2.classList.add("changeStyle");//!We can add classes

changeColor.addEventListener("click", function(){

   //text.classList.add("changeStyle");
   //text.classList.transform
   //text.classList.remove
   text.classList.toggle("changeStyle");
});

//*All the previous code we are just taking all elements as one, but we can modify each individual

const userList = document.querySelectorAll('.name-list li');

for(user of userList){
    user.addEventListener("click", function(){
       this.style.color = "green";
    });
}

const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");
const userList2 = document.querySelector(".name-list2");

addListBtn.addEventListener("click", function(){

   const newLi = document.createElement("LI");
   //!El LI lo podemos cambiar por varias cosas ejemplo un h1, a progress var,butoon y cuando apretemos nos lo va a generar
   const liContent = document.createTextNode(listInput.value);
   //!I think this is used to create a content who is inside the CreatedElement
   //!Con element.value podemos ver el valor introducido por el usuario o algo asi

   newLi.appendChild(liContent);
   userList2.appendChild(newLi);
});
