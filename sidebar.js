function showside(){
    let selectaside = document.querySelector('.sidebar');
    selectaside.style.marginLeft = "0px";
    selectaside.style.transition = "margin-left .5s"

    let selectsmallaside = document.querySelector('.smallsidebar');
    selectsmallaside.style.display = "none";


}

// crud for dashboard

// crud operation
(async function(){
    let data = await fetch('http://localhost:4000/product');
    let response = await data.json();



    document.querySelector('#data').innerHTML =  response.map((e)=>`
       <tr>
          <td>${e.id}</td>
          <td><img src="${e.photo ? e.photo : 'placeholder.png'}" width="50px"></td>
          <td>${e.name}</td>
          <td>${e.stock}</td>
          <td>${e.price}</td>
       </tr>
    `).join(" ");
})()
