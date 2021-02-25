import client from './data.js';

let count = 0;
const {Photo,name,desc} = client;

const profileImg = document.querySelector('img');
const UserName = document.querySelector('.Name');
const Rating = document.querySelector('.desc');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

leftButton.addEventListener('click',function (){
    remove();
});

rightButton.addEventListener('click',function (){
    add();
});

   function add(){
    count++;
   if( count > client.length -1 ){
        
    count = 0; 
    }
    const element = client[count];
    profileImg.src =element.Photo;
    UserName.innerHTML = element.name;
    Rating.textContent = element.desc;
}

setInterval(add,4000);

function remove(){
    count--;

    if(count < 0){
        count = client.length -1 
       
    }
    const element = client[count];
    profileImg.src =element.Photo;
    UserName.innerHTML = element.name;
    Rating.textContent = element.desc;
};