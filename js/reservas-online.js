//Declaración e inicialización de precio de las clases, cantidad de clases, y descuentos
let discount = 0.15;
let individualClassPrice = 1000;
let groupClassPrice = 750;
let totalPrice;
let finalPrice;
let groupClasses = 0;
let individualClasses = 0;

//Objeto cliente
class Client {
  constructor(name, age, category) {
    this.name = name;
    this.age = age;
    this.category = category;
  }
  // Método para efectuar el pago
  pay() {
    document.getElementById("modal-body").innerHTML = `
    <div id="payment">Para realizar el pago porfavor ingresa los datos de tu tarjeta de crédito/débito <br>
    <form id="confirmForm">
      <input type="number" id="creditCardInfo" name="creditCardInfo">
      <input type="submit" value="confirmar">
    </form>
    </div>
    `;
  }
}

//Saludos aleatorios
let hello = [
  "Buenas! Bienvenido al sistema de reservas online de clases de tenis, a continuación se le pedirán una serie de datos para completar su registro",
  "Buenas! Hoy es un excelente dia para jugar al tenis :D",
  "Hola! Te esperamos para jugar!! Recorda que si reservas mas de 3 clases hay descuento ;)",
  "Copate y venite a jugar con nosotros, reserva una clase!",
];
const randomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};
hello = randomItem(hello);
document.getElementById("randomHello").innerHTML += hello;

// Declaración de array de jugadores
const players = [];
players.push(new Client("Luciano", "24", "2°"));
players.push(new Client("Joaquín", "21", "3°"));
players.push(new Client("Mariano", "35", "1°"));
players.push(new Client("Agustina", "25", "4°"));
players.push(new Client("Julian", "19", "3°"));
players.push(new Client("Romina", "27", "1°"));

// Almacenamiento del array de jugadores
const playersJSON = JSON.stringify(players);
sessionStorage.setItem("Array de jugadores", playersJSON);



// Ordenamiento de Array por categoría con función sort()
players.sort(function (a, b) {
  if (a.category > b.category) {
    return 1;
  } else if (a.category < b.category) {
    return -1;
  } else {
    return 0;
  }
});

// Funcion para calcular el precio final de las clases
function costCalculation(individualClassPrice, groupClassPrice, discount) {
  totalPrice =
    individualClasses * individualClassPrice + groupClasses * groupClassPrice;
  if (individualClasses + groupClasses >= 3) {
    finalPrice = totalPrice * (1 - discount);
  } else {
    finalPrice = totalPrice;
  }
  return finalPrice;
}

// Calendario semanal con los horarios para reservar una clase
const classReservation = document.getElementById("classReservation");
const reservation = document.getElementById("reservation");
const principal = document.getElementsByClassName("principal");
classReservation.onclick = () => {
  document.getElementById("timetable").className += "m-5 p-5";
  reservation.style.display = "none";
  const bookingInformation = document.createElement("div");
  bookingInformation.innerHTML = ` 
  
  <p>Seleccioná dia y horario que desees reservar</p>
  <div class="row">
  <p class="col-sm">Lunes</p>
  <p class="col-sm">Martes</p>
  <p class="col-sm">Miércoles</p>
  <p class="col-sm">Jueves</p>
  <p class="col-sm">Viernes</p>
  <p class="col-sm">Sábado</p>
</div>
<div class="row">
  <select
    name="mondayReservation"
    id="mondayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
  <select
    name="tuesdayReservation"
    id="tuesdayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
  <select
    name="wednesdayReservation"
    id="wednesdayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
  <select
    name="thursdayReservation"
    id="thursdayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
  <select
    name="fridayReservation"
    id="fridayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
  <select
    name="saturdayReservation"
    id="saturdayReservation"
    class="col-sm bookingForm"
  >
    <option value="No seleccionar">No seleccionar</option>
    <option value="8">08:00 hs</option>
    <option value="9">09:00 hs</option>
    <option value="10">10:00 hs</option>
    <option value="11">11:00 hs</option>
  </select>
</div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" id="bookingButton" data-toggle="modal" data-target="#staticBackdrop">
  Reservar
</button>
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="close closeButtons" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="modal-body" class="modal-body">
      </div>
      <div class="modal-footer" id="modal-footer">
        <button type="button" class="btn btn-secondary closeButtons" data-dismiss="modal">Cerrar</button>
        <button type="button" id="nextButton" class="btn btn-primary">Siguiente</button>
      </div>
    </div>
  </div>
</div>`;
  document.getElementById("timetable").appendChild(bookingInformation);
  const bookingButton = document.getElementById("bookingButton");
  const selectMonday = document.getElementById("mondayReservation");
  const selectTuesday = document.getElementById("tuesdayReservation");
  const selectWednesday = document.getElementById("wednesdayReservation");
  const selectThursday = document.getElementById("thursdayReservation");
  const selectFriday = document.getElementById("fridayReservation");
  const selectSaturday = document.getElementById("saturdayReservation");
  // Método onchange para contar la cantidad de clases reservadas
  selectMonday.onchange = () => {
    if (selectMonday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  selectTuesday.onchange = () => {
    if (selectTuesday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  selectWednesday.onchange = () => {
    if (selectWednesday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  selectThursday.onchange = () => {
    if (selectThursday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  selectFriday.onchange = () => {
    if (selectFriday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  selectSaturday.onchange = () => {
    if (selectSaturday.value != "No seleccionar") {
      individualClasses++;
    }
  };
  // Botones para reservar los horarios seleccionados
  bookingButton.onclick = () => {
    costCalculation(individualClassPrice, groupClassPrice, discount);
    const summary = document.createElement("p");
    summary.innerHTML = `¿Desea confirmar la reserva? <br>${individualClasses} clases, total a abonar: $${finalPrice}`;
    document.getElementById("modal-body").appendChild(summary);
    const closeButtons = document.getElementsByClassName("closeButtons");
    for (let close of closeButtons) {
      close.onclick = () => {
        location.reload();
      };
    }
    console.log(window.history);
    const nextButton = document.getElementById("nextButton");
    nextButton.onclick = () => {
      players[1].pay();
      nextButton.style.display = "none";
      let confirmButton = document.getElementById("confirmForm");
      confirmButton.addEventListener("submit", validateForm);
      function validateForm(e) {
        e.preventDefault();
        document.getElementById("payment").innerHTML =
          "<p>Tu pago ha sido procesado exitosamente</p>";
      }
    };
  };
};