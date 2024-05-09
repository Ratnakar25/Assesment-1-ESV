const API="http://localhost:3002/products";
 
const target=document.getElementById("target")
 
async function getResponse() {
    const response = await fetch(API);
    const data=await response.json();
    let str="";
    data.forEach(item => {
        str+=`<div class="col-sm-4">
       
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${item.image}" alt="Card image cap" style="width:100%; height:35vh;  object-fit: cover; " >
<div class="card-body">
 <h5 class="card-title">${item.pname}</h5>
 <p class="card-text">
    Rs.${item.price} <br/>
 </p>
 <p class="card-text">
    Rs.${item.quantity} <br/>
 </p>
 <button class="btn btn-danger" onclick="delPro(${item.id})">Delete</button>
 <a href="editelement.html?id=${item.id}"  class="btn btn-primary">Edit </a>
</div>
</div>
 
        </div>`
    })
    target.innerHTML=str;
}
getResponse();
 
async function delPro(id){
   
    const response=await fetch(`${API}/${id}`,{
        method:"DELETE"
    });
    const data=await response.json();
try{
    if(data){
        alert("Deleted")
    }
}
   catch(err){
    console.log(err)
   }
}
 
 
(function () {
    'use strict'
 
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
 
    // Loop over them and prevent submission
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
 
 
let form=document.getElementById("addForm")
 
async function addproduct(){
    let name=document.getElementById("name").value;
    let price=document.getElementById("price").value;
    let quantity=document.getElementById("quantity").value;
    let image=document.getElementById("image").value;
if(name!=""&&price!=""&&image!=""&&quantity!=""){
    const formdata={pname:name,price:price,quantity:quantity,image:image}
    console.log(formdata);
    const response=await fetch(API,{
        method:"POST",
        body:JSON.stringify(formdata),
        headers:{
            'Content-Type':'application/json'
        }
    })
   const data=await response.json();  
    if(data){
        window.location.href="./index.html"
    }
}
 
}
form.addEventListener("submit",(event)=>{
     event.preventDefault();
    //  let name=document.getElementById("name");
    //  let price=document.getElementById("price");
    //  let quantity=document.getElementById("quantity");
    //  let Image=document.getElementById("image");
    //  if(name!=""&&price!=""){
    //     const formdata={name:name,price:price,quantity:quantity,Image:Image}
         
    //  }
    addproduct();
     
})