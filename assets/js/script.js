


let btnUpdate = document.getElementById('btn-Update2');
btnUpdate.addEventListener('click',UpdatcustomerData);

let btnAdd = document.getElementById('btn-AddNew');
btnAdd.addEventListener('click', AddNewRequest);

// let btnbooking = document.getElementById('btn-Addbooking');
  
// //  btnbooking.addEventListener('click',)

//  let BookingForm = document.getElementById('bookingForm');


//  function ShowAndHideForm()
//  {
//     if (BookingForm.style.display === 'none' ) {
//         BookingForm.style.display = 'block'; // إظهار النموذج
//                  // تغيير نص الزر
//              } else {
//                 BookingForm.style.display = 'none'; // إخفاء النموذج
//                   // تغيير نص الزر
//              }
//  }

// document.getElementById('btn-Addbooking').addEventListener('click', function() {
//     const form = document.getElementById('bookingForm');
//     if (form.style.display === 'none' || form.style.display === '') {
//         form.style.display = 'block'; // إظهار النموذج
//         this.textContent = 'إخفاء نموذج الحجز'; // تغيير نص الزر
//     } else {
//         form.style.display = 'none'; // إخفاء النموذج
//         this.textContent = 'إظهار نموذج الحجز'; // تغيير نص الزر
//     }
// });
 

// function getAllCars() {
//     return fetch('https://localhost:7068/api/Car')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(cars => {
//         // تأكد من مسح محتوى tbody قبل إضافة السجلات الجديدة
//          $('.main-slider').empty();
  
//         for (const car of cars) {
//           let slider = `
       
//               <article class="level-silder-item">
//                  <img src="/assets/img/car2.png" alt="">
//                 <div class="level-silder-Details">
//                   <h4>Model: ${car.make}</h4>
//                   <h4>Make: <span id="Make">${car.model}</span></h4>
//                   <h5>Price: <span id="Price">${car.madeYear}</span></h5>
//                   <h6>M.O.Year: <span id="Year">${car.mileage}</span></h6>
//                   <p class ="m-0"> Price : $ ${car.rentalPricePerDay}</p>
//                   <p class="m-0"> Is Available ${car.isAvailable?'yes':'no'}</p>
//                   <p> plate number : ${car.plateNumber}</p>
//         <button id="btn-AddNew" type="button" class="btn btn-primary">Rent</button>
  
                  
//                 </div>
//               </article>
           
//           `;
       
//           // console.log(car.imagePath);
//            $('.main-slider').append(slider);
         
//           //  console.log(slider);
           
        
//           }
  
//           $('.main-slider').slick({
//             dots: true,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//           });
       
  
       
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         window.alert('There is an error in the server');
//       });
//   }
  
//   getAllCars();
  
  
  
  $('.landing').slick(
      {
          dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
  
      }
  );
  

  
  
  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
  }
  



    function GetAllCustomer() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://localhost:7068/api/Customer");
        request.responseType = "json";
        request.send();
    
        request.onload = function() {
            let Customers = request.response;
    
            if (request.status >= 200 && request.status < 300) {
                // إزالة الصفوف السابقة
                $("#Mytable .tbody tr").empty(); // تأكد من إزالة الصفوف السابقة بشكل صحيح
    
                for (const item of Customers) {
                    // الحصول على بيانات العنصر
                    const tr = `
                        <tr>
                           <td>
                                <button class="btn btn-primary" onclick="getCustomerData(${item['customerId']})">Update</button>
                            </td>
                            <td>
                                <button class="btn btn-primary bg-dark" onclick="DeleteRequest(${item['customerId']})">Delete</button>
                            </td>
                            <td>${item['customerId']}</td>
                            <td>${item['name']}</td>
                            <td>${item['nationalId']}</td>
                            <td>${item['address']}</td>
                            <td>${item['email']}</td>
                            <td>${item['phone']}</td>
                            <td>${item['driverLicense']}</td>
                         
                        </tr>
                    `;
                    $("#Mytable .tbody").append(tr); // إضافة الصف إلى tbody
                }
    
                
                    
                    $(document).ready(function(){
                        $("#Mytable").dataTable();
                        })
            } else {
                window.alert("There is an error in the server");
            }
        }
    }
    
    // استدعاء الدالة لجلب البيانات
    GetAllCustomer();
    

    
 
    function GetAllBookings() {
        let request = new XMLHttpRequest();
        request.open("GET", "https://localhost:7068/api/Booking");
        request.responseType = "json";
        request.send();
    
        request.onload = function() {
            let Bookings = request.response;
    
            if (request.status >= 200 && request.status < 300) {
              
                $("#Mytable2 .tbody tr").empty(); 
                for (const booking of Bookings) {
                    // إنشاء صف جديد لكل حجز
                    let row = `
                        <tr>
                         <td>
                                <button class="btn btn-primary" onclick="updateBooking(${booking.bookingId})">Update</button>
                            </td>
                            <td>
                                <button class="btn btn-primary bg-dark" onclick="deleteBooking(${booking.bookingId})">Delete</button>
                            </td>
                            <td>${booking.bookingId}</td>
                            <td>${booking.customerId}</td>
                            <td>${booking.vehicleId}</td>
                            <td>${booking.startDate}</td>
                            <td>${booking.endDate}</td>
                            <td>${booking.pickUpLocation}</td>
                            <td>${booking.dropOffLocation}</td>
                            <td>${booking.rentalPricePerDay}</td>
                            <td>${booking.initialCheckNotes}</td>
                            <td>${booking.initialTotalDueAmount}</td>
                            <td>${booking.initialRentalDays}</td>
                           
                        </tr>
                    `;
    
                    // إضافة الصف إلى tbody
                    $("#Mytable2 .tbody").append(row); // إضافة الصف إلى tbody
                }
    
                // تهيئة DataTables بعد إضافة الصفوف
                $("#Mytable2").DataTable(); // تأكد من أن DataTables تم تهيئته بشكل صحيح
    
            } else {
                window.alert("There is an error in the server");
            }
        }
    }
    
    // استدعاء الدالة لجلب البيانات
    GetAllBookings();
  

    $(document).ready(function(){
        $("table1").dataTable();
        })
    

    function DeleteRequest(id) {
      request = new XMLHttpRequest();
      request.open("Delete","https://localhost:7068/api/Customer/"+id)
      request.responseType = "json"
      request.setRequestHeader("Accept","Application/json");
        request.setRequestHeader("Content-Type","application/json")
    
    
      request.send();
     
    
     request.onload = function(){
    
      let Respons2 = request.response;
        
         if(request.status >= 200 && request.status < 300)
         {
    
    
            console.log(Respons2);
            console.log(" the status code is " + request.status)
            alert("the Request has been deleted Successfuly ");
            location.reload();
            
          
    
         } else
         {
          alert(" There is Errors")
         }
    
    }
    }

    function getCustomerData(id) {
      let request = new XMLHttpRequest();
      request.open("GET", "https://localhost:7068/api/Customer/"+id); // استبدل 1 بمعرف العميل المطلوب
      request.responseType = "json";
      request.send();
  
      request.onload = function() {
          if (request.status >= 200 && request.status < 300) {
              let customer = request.response;
  
              // إدخال القيم في حقول الإدخال
              document.getElementById('Name').value = customer.name;
              document.getElementById('National-Id').value = customer.nationalId;
              document.getElementById('License').value = customer.driverLicense;
              document.getElementById('Email').value = customer.email;
              document.getElementById('Address').value=customer.address;
              document.getElementById('Phone').value=customer.phone;
              document.getElementById('id').value= customer.customerId;

   
              console.log(customer)
          } else {
              alert("Error loading customer data: " + request.statusText);
          }
      };
  
      request.onerror = function() {
          alert("Network error.");
      };
  }
  
function AddNewRequest() {
  let name1 = document.getElementById('Name').value;
  let nationalId1 = document.getElementById('National-Id').value;
  let license1 = document.getElementById('License').value;
  let email1 = document.getElementById('Email').value;
  let address1 = document.getElementById('Address').value;
  let phone1 = document.getElementById('Phone').value;

  // تحقق من القيم المدخلة
  if (!name1 || !nationalId1 || !email1 || !address1 || !phone1 || !license1) {
      alert("Please fill in all required fields.");
      return; // إيقاف التنفيذ إذا كانت هناك حقول فارغة
  }

  let request = new XMLHttpRequest();
  request.open("POST", "https://localhost:7068/api/Customer");
  request.responseType = 'json';
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("Content-Type", "application/json");

  // تكوين جسم الطلب
  let bodyPar = JSON.stringify({
      name: name1,
      nationalId: nationalId1,
      address: address1,
      email: email1,
      phone: phone1,
      driverLicense: license1
  });

  // إرسال الطلب
  request.send(bodyPar);

  request.onload = function() {
      if (request.status >= 200 && request.status < 300) {
          console.log("Status Code is " + request.status);
          alert("Add New Customer successfully");
          console.log(request.statusText)
          console.log("Successfully added new customer");
          
          location.reload(); // إعادة تحميل الصفحة بعد النجاح
      } else {
          alert("There are errors in adding the new request: " + request.statusText);
      }
  };

  request.onerror = function() {
      alert("There was a network error.");
  };
}



  
function GetRequestByFilerting(id )
{
  
  
let request= new XMLHttpRequest()
request.open("Get","http://localhost:5082/api/Customer/"+id)
request.responseType ="json"
request.send();



request.onload = function()
{
  let pro = request.response
    
   if (request.status >= 200 && request.status < 300)
   {
     

 
        document.getElementById('title').value = pro.name;
       document.getElementById('price').value = pro.age;
        document.getElementById('taxes').value = pro.grades;

      console.log( pro.name , pro.age , pro.grades)

   }
   else{

    window.alert(" There is Error in  Server");
   }

}

}
    



function getAllCars() {
    return fetch('https://localhost:7068/api/Car')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(cars => {
      
        $('.main-slider').empty();
  
        for (const car of cars) {
          let slider = `
           <div class="card text-center" data-content="${car.make} ${car.rentalPricePerDay} ${car.isAvailable} ${car.make}">
            <img src="/assets/img/car2.png" alt="">
                <h5 class="m-1" >Model: ${car.model}</h5>
                <h6 class="m-1">Make: ${car.make}</h6>
                <p class="m-1">mileage: ${car.mileage}</p>
                <span>Is Available? ${car.isAvailable ? 'yes' : 'no'}</span>
                <div>Price: ${car.rentalPricePerDay}</div>
              <button id="btn-Addbooking" onclick="ShowAndHideBookingForm()" class="btn btn-primary">Rent</button>
            </div>
          `;
          $('.main-slider').append(slider);
        }
  
        $('.main-slider').slick({
                        dots: true,
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    });
                    
      })
      .catch(error => {
        console.error('Error:', error);
        window.alert('There is an error in the server');
      });
      
}







 getAllCars();




 document.getElementById('filterInput').addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const content = card.getAttribute('data-content').toLowerCase();
        // تحقق مما إذا كان المحتوى يحتوي على النص المدخل
        if (content.includes(filterValue)) {
             card.style.display = 'inline-block'; // عرض البطاقة إذا كانت تحتوي على النص
          
          
        } else {
            card.style.display = 'none';
        }

        
    });
});



  function UpdatcustomerData()
  {
    let request = new XMLHttpRequest();
    request.open("PUT", "https://localhost:7068/api/Customer");
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");

    // الحصول على القيم من المدخلات
    let name1 = document.getElementById('Name').value;
    let nationalId1 = document.getElementById('National-Id').value;
    let license1 = document.getElementById('License').value;
    let email1 = document.getElementById('Email').value;
    let address1 = document.getElementById('Address').value;
    let phone1 = document.getElementById('Phone').value;
    let customerId1 = document.getElementById('id').value;

    // تكوين جسم الطلب
    let bodyPar = JSON.stringify({
        customerId: customerId1,
        name: name1,
        nationalId: nationalId1,
        address: address1,
        email: email1,
        phone: phone1,
        driverLicense: license1
    });

    // إرسال الطلب
    request.send(bodyPar);

    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            console.log(request.response);
            console.log("The status code is " + request.status);
            alert("The request has been updated successfully.");
        } else {
            console.log(request.statusText);
            alert("There are errors in update: " + request.statusText);
        }
    };

    request.onerror = function() {
        alert("There was a network error.");
    };
  }
 


 function ShowAndHideBookingForm() {

    const form = document.getElementById('bookingForm');
    if (form.style.display ==='none' || form.style.display === '') {
        form.style.display = 'flex'; 
         
      
    } else {
        form.style.display = 'none'; // إخفاء النموذج
        
    }

}
    
    
  

$(document).ready(function(){
$("#Table1").dataTable();
})