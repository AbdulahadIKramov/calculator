
const buttons = document.querySelector('.buttons')
let btn  = document.querySelectorAll('span')
const value = document.querySelector('#value')



btn.forEach(item => {
    item.addEventListener('click', function() {

      if(this.innerHTML === "="){
         value.innerHTML = eval(value.innerHTML)
      }else{

         if(this.innerHTML === "Clear"){
            value.innerHTML = ""
         }
         else{
            value.innerHTML += this.innerHTML
         }
      }

   })
})

if(value.length === "15"){
   value.innerHTML = value + "..."
}

