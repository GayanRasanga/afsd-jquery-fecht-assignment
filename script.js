

function savedata(){
    const formEl = document.querySelector('.form')
    formEl.addEventListener('submit',event =>{
      event.preventDefault();
      const formData = new FormData(formEl);
    //console.log(formData.get('fullname'));
      const data = Object.fromEntries(formData);
      console.log(data);

    fetch('http://localhost:8086/user',{
         method:"POST",
         headers:{
            "Content-Type": "application/json",
         },
         body:JSON.stringify(data),
    })
         .then(res => res.json())
         .then(dat => console.log(dat))
         .catch(err => console.log(err));
     })
    
}

  function getalluser(){
    fetch('http://localhost:8086/user').then((data)=>{ 
      return data.json();
    }).then((objectdata) =>{
      console.log(objectdata[0].name);
      let tabledata = "";
      objectdata.map((values)=>{
        tabledata += `<tr>
        <td>${values.id}</td>
        <td>${values.username}</td>
        <td>${values.name}</td>
        <td>${values.password}</td>
        <td>${values.email}</td>
    </tr>`;
      });
      console.log(tabledata);
      //document.querySelector("table-body").innerHTML=tabledata;
      document.getElementById('tbody').innerHTML = tabledata;
      $(document).ready(function () {
        $('#usertable').DataTable({
          
        });
    });
    })     
      
}

function loadpage1(){
    document.getElementById('datatable').style.display="none";
    document.getElementById('form-data').style.display="block";
  }
  function loadpage2(){
    document.getElementById('datatable').style.display="block";
    document.getElementById('form-data').style.display="none";
  }


    document.getElementById('datatable').style.display="none";

    
