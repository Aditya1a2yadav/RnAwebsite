burger = document.querySelector('div.hamburger i');
hide = document.querySelector('.hide');

cross = document.querySelector('.cross')


burger.addEventListener('click', ()=>{


hide.classList.toggle('v-class')

})
cross.addEventListener('click', ()=>{
   hide.classList.toggle('v-class')  
})

