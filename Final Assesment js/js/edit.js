const API="http://localhost:3002/products";
const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);
const pid=searchParams.get('id');
 
firstload(pid);
 
async function firstload(pid){
   const response=await fetch(`${API}/${pid}`);
   const data=await response.json();
 
   try{
    if(data){
        document.getElementById("editname").value=data.pname;
  document.getElementById("editprice").value=data.price;
  document.getElementById("editquantity").value=data.quantity;
  document.getElementById("editimage").value=data.image;
    }
   }
   catch(err){
    console.log(err);
   }
}
 
async function editpage(){
    let name=document.getElementById("editname").value;
    let price=document.getElementById("editprice").value;
    let quantity=document.getElementById("editquantity").value;
    let image=document.getElementById("editimage").value;
   
    const formdata={pname:name,price:price,quantity:quantity,image:image}
    const response=await fetch(`${API}/${pid}`,{
        method:"PUT",
        body:JSON.stringify(formdata),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const data=await response.json();
    try{
        if(data){
            window.location.href="./index.html"
        }
        else{
            alert("Enter full details")
        }
    }
    catch(err){
       console.log(err)
    }
}
document.getElementById("editForm").addEventListener('submit',(event)=>{
   event.preventDefault();
    editpage()
})
(function () {
    'use strict'
 
    var forms = document.querySelectorAll('.needs-validation')
 
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
 
          form.classList.add('was-validated')
        }, false)
      })
  })()