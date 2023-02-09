var addOns =  document.querySelectorAll('.btn-plus');

for (let i = 0; i < addOns.length; i++) {
   addOns[i].addEventListener ("click", function (){
       let qte = document.querySelectorAll('.qte')
    
       let conversion = parseInt(qte[i].value);
       conversion++;
       qte[i].value = conversion;

       let total = document.getElementById('total');
       let price = document.querySelectorAll('.price')
      
       let convert = parseInt(price[i].textContent);
       let product = convert * qte[i].value;
       total.textContent = parseInt(total.textContent) + convert
       

   });
}



var subtract = document.querySelectorAll('.btn-moins');

for(let i = 0; i < subtract.length; i++) {
   subtract[i].addEventListener('click', function (){
   let qte = document.querySelectorAll('.qte')
       let conversion = parseInt(qte[i].value);
       conversion--;
       qte[i].value = conversion;


   let total = document.getElementById('total');
   let price = document.querySelectorAll('.price');
   let convert = parseInt(price[i].textContent);
   let product = convert * qte[i].value;
       total.textContent = parseInt(total.textContent) - convert;
       
   })
}


var supp = document.querySelectorAll('.del');

for (let i = 0; i < supp.length; i++) {
   supp[i].addEventListener('click', function(event) {
       event.preventDefault();
       let qte = document.querySelectorAll('.qte')
       
       let total = document.getElementById('total');
       let price = document.querySelectorAll('.price');
       let convert = parseInt(price[i].textContent);
       
   let product = convert * qte[i].value;
       qte[i].value = 0;
       total.textContent = '0';
   })

}



var heart = document.querySelectorAll('.material-symbols-sharp');
for(let i = 0; i < heart.length; i++) {
   let countLike = 0;
heart[i].addEventListener('click', function(){
   if (countLike === 0) {
       heart[i].style.color = "pink";
       countLike[i] = 1;
   } else {
       countLike[i]  = 0;
       heart[i].style.color = "gray";
       
   }
})
}

