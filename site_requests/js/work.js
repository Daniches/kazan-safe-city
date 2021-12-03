
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  function testFunction() {
    location.reload();
}

  
js()

  // собирает и вывод значений в таблицу

  function getset(data, actual){
    var arrayOfStrings = data.split(";");
    let tbody = document.querySelector('.list')
    tbody.innerHTML = ""
    var j = 0;
    if(arrayOfStrings.length) {
      table1.hidden = false
      for(let i = 1 ; i<arrayOfStrings.length; i++) {
        var newarr = arrayOfStrings[i-1].split(",");
        if (newarr[5] == actual) {
          j = j + 1;
        tbody.insertAdjacentHTML('beforeend',
        `
        <tr class="align-middle">
          <td style="background-color:black; color: white;">${j}</td>
          <td style="background-color:black; color: white;">${newarr[1]}</td>
          <td class="adress" style="background-color:black; color: white;">${newarr[2]}</td>
          <td class="datetime" style="background-color:black; color: white;">${newarr[3]}</td>
          <td 
           
          style="background-color:black; color: white;"><a href="photo.jpg">Открыть фото</td>
          <td style="background-color:black; color: white;"><button class="good_delete btn-danger" data-delete="delete">&#10006;</button></td>
          <td style="background-color:black; color: white;"><button class="good_delete btn-primary" data-next="next">&#10149;</button></td>
        </tr>
        `)
      }
      }
    }
  }

  //для взаимодействия с базой данных, обращение к файлу php, возврат полученного массива
  function  js() {
    var actual = localStorage.getItem("actual");

    var data = 0;
    $.ajax({
      url: "bd.php",
      data: {
        row: 123
        
      },
      type:'POST',
      dataType: 'text',
      }).done(function(data) { 
        data = data
        getset(data, actual)
        return data
   });
   return data
  }


  function MakeRequest()
  {
    var xmlHttp = getXMLHttp();
  
    xmlHttp.onreadystatechange = function()
    {
      if(xmlHttp.readyState == 4)
      {
        HandleResponse(xmlHttp.responseText);
      }
    }
  
    xmlHttp.open("GET", "ajax.php", true); 
    xmlHttp.send(null);
  }




  document.querySelector('.list').addEventListener('click', function(e) {  
    if(!e.target.dataset.next) {
      return
    }
    if(e.target.dataset.next) {
    Swal.fire({
      position: 'top-end',
      icon: 'Успешно',
      title: 'Ваша заявка успешно отправлена',
      showConfirmButton: false,
      timer: 1500
    
    })
                                  
     
    }
  
  })

