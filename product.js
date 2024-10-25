// let products = [];
function addproduct(){
    
    let photo = document.getElementById("img1").value;
    let name = document.getElementById("name").value;
    let stock = document.getElementById("qnty").value;
    let price = document.getElementById("price").value;


    // if (!name || !stock || !price || !img) {
    //     alert('Please fill out all fields.');
    //     return false;
    // }


    let productinfo = {
        "photo":photo,
        "name":name,
        "stock":stock,
        "price":price
        

        
    }




fetch('http://localhost:4000/product',{
    method:"POST",
    headers:{
        "content-type":"application/json"
    },
    body:JSON.stringify(productinfo)

})

}
// ----------delete code
function del(arg){
   
    let con = window.confirm("Do you want to delete product information");
    if(con){
        fetch(`http://localhost:4000/product/${arg}`,{
            method:"DELETE"
        })
    }else{
        alert("invalid click")
    }
   
}

// crud operation
(async function(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();



    document.querySelector('#data').innerHTML =  response.map((e)=>`
       <tr>
          
          <td>${e.id}</td>
          <td><img src="${e.photo}" width="50px"></td>
          <td>${e.name}</td>
          <td>${e.stock}</td>
          <td>${e.price}</td>
          <td>
             <button onclick="openform('${e.id}')"><i class="fa-solid fa-pen-to-square"></i></button>
             <button onclick="del('${e.id}')"><i class="fa-solid fa-trash"></i></button>
          </td>
       </tr>
    `).join(" ");
})()
// ----------------------------------------------------------------------------------------------

let uid = null;
async function openform(arg){
    uid= arg
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();


    
    let info = response.find(e=>e.id === arg);
    console.log(info)

    let selectform1 = document.querySelector('.productform input');
    selectform1.style.marginTop = "100px";
    let selectform2 = document.querySelector('.productform button');
    selectform2.style.marginTop = "100px"
    let selectform = document.querySelector('.productform');
    selectform.style.display = "block";
    selectform.style.marginLeft = "200px";
    let selectubtn = document.querySelector('.addbtn');
    selectubtn.style.display = "none";
    let selectpbtn = document.querySelector('.updatebtn');
    selectpbtn.style.display = "block";


    document.querySelector('#img1').value = info.photo;
    document.querySelector('#name').value = info.name;
    document.querySelector('#qnty').value = info.stock;
    document.querySelector('#price').value = info.price;
}
// ========================================================================
// ========================final update================

function updateProduct(){
    
    let photo = document.querySelector('#img1').value;
    let name = document.querySelector('#name').value;
    let stock = document.querySelector('#qnty').value;
    let price = document.querySelector('#price').value;
    let obj = {//work from here
        
        "photo":photo,
        "name":name,
        "stock":stock,
        "price":price
        
    }
   
    fetch(`http://localhost:4000/product/${uid}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    
    return false;
}




        // --------------search bar---------------------
        // let start = 0;
        // let end =5;
        // (async function(){
        //     let data = await fetch('http://localhost:4000/product');
        //     let response = await data.json();
        
        //     let filterdata = response.filter((e,index)=>{return index >= start && index < end})
         
        //     let selecttr = document.querySelector('#showtabledata');
        //     selecttr.innerHTML = filterdata.map((items)=>`
        //     <tr>
        //     <td> ${items.id}</td>
        //     <td> ${items.name}</td>
        //     <td> ${items.price}</td>
        //     <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
        //     <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
        //     </tr>
        //     `).join(" ")
        // })();
        
        
        // async function pageincrease(){
        //     let data = await fetch('http://localhost:4000/product');
        //     let response = await data.json();
        
            
        
        //     if(end < response.length){
                
        //         start = start + 5;
        //         end = end + 5;
        
        //        let filterdata = response.filter((e,index)=>{return index >= start && index < end})
         
        //        let selecttr = document.querySelector('#showtabledata');
        //        selecttr.innerHTML = filterdata.map((items)=>`
        //     <tr>
        //     <td> ${items.id}</td>
        //     <td> ${items.photo}</td>
        //     <td> ${items.name}</td>
        //     <td> ${items.stock}</td>
        //     <td> ${items.price}</td>
        //     <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
        //     <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
        //     </tr>
        //     `).join(" ");
        //     if(end === response.length){
        //         let s = document.querySelector('#incbtn');
        //         s.style.display = "none"
        //     } 
        //     }
               
        //     else{
        //         alert("dd")
        //     }
        // }
        
        // ==============================================
        
// ==============search=========================


// async function datasearch(){
//     let data = await fetch('http://localhost:4000/product');
//     let response = await data.json();

//     let selectoption = document.querySelector('#searchoption').value;
//     // alert(selectoption);
//     let selectsearchbox = document.querySelector('#searchbox').value;

//     // alert(selectsearchbox);

//     let storefilterdata;
//     let selecttr;

//     switch (selectoption){
//         case 'name':
//              storefilterdata = response.filter((e)=> e.name === selectsearchbox);
//              console.log(storefilterdata);
//             //  ==========display data

//              selecttr = document.querySelector('#showtabledata');
//              selecttr.innerHTML = storefilterdata.map((items)=>`
//              <tr>
//              <td> ${items.id}</td>
//              <td> ${items.name}</td>
//              <td> ${items.price}</td>
//              <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
//              <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
//              </tr>
//              `).join(" ")
//              break;
        
//         case 'price':
//              storefilterdata = response.filter((e)=>e.email === selectsearchbox);
//              console.log(storefilterdata);
//             //  ==========display data
//              selecttr = document.querySelector('#showtabledata');
//              selecttr.innerHTML = storefilterdata.map((items)=>`
//              <tr>
//              <td> ${items.id}</td>
//              <td> ${items.name}</td>
//              <td> ${items.price}</td>
//              <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
//              <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
//              </tr>
//              `).join(" ")

//              break;
//     }

//     // let newarr = Array.map((e)=>e/2);



// }

// Search functionality
async function datasearch(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();

    let selectoption = document.querySelector('#searchoption').value;
    // alert(selectoption);
    let selectsearchbox = document.querySelector('#searchbox').value;

    // alert(selectsearchbox);

    let storefilterdata;
    let selecttr;

    switch (selectoption){
        case 'name':
             storefilterdata = response.filter((e)=> e.name === selectsearchbox);
             console.log(storefilterdata);
            //  ==========display data

             selecttr = document.querySelector('#showtabledata');
             selecttr.innerHTML = storefilterdata.map((items)=>`
             <tr>
             <td> ${items.id}</td>
             <td> ${items.name}</td>
             <td> ${items.price}</td>
             <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
             <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
             </tr>
             `).join(" ")
             break;
        
        case 'price':
             storefilterdata = response.filter((e)=>e.email === selectsearchbox);
             console.log(storefilterdata);
            //  ==========display data
             selecttr = document.querySelector('#showtabledata');
             selecttr.innerHTML = storefilterdata.map((items)=>`
             <tr>
             <td> ${items.id}</td>
             <td> ${items.name}</td>
             <td> ${items.price}</td>
             <td onclick="del('${items.id}')"> <i class="fa-solid fa-trash"></i></td>
             <td onclick="openform('${items.id}')"> <i class="fa-solid fa-pen-to-square"></i></td>
             </tr>
             `).join(" ")

             break;
    }

    // let newarr = Array.map((e)=>e/2);



}
// function openprodcutform()
// {
//     document.querySelector(".productform").style="display:block"
// }