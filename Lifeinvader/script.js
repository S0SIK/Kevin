
const linki = document.querySelectorAll('a');

linki.forEach(link => {
  link.addEventListener('click', (event) => {
  
    event.preventDefault();

    alert('Nie można przejść do tej strony.');
  });
});


const Lok = (num, expectedLen) => {
  const inputLen = Math.ceil(Math.log(num + 1) / Math.LN10);
  // num.toString().substring(0, expectedLen).length

  let output = num.toString().substring(0, expectedLen);

  for (let i = 0; i < expectedLen - inputLen; i++) {
    output += "\ ";
  }

  return output;
}


  fetch('../podstrony/obywatele/LSPD.json')
  .then(response => response.json())
  .then(data => {

    const c = new Date();
    const y = c.getFullYear()
    const m = c.getMonth() + 1
    const d = c.getDate()
    const h = c.getHours()
    const mi = c.getMinutes()
    const s = c.getSeconds()
    const czas = `${h}:${mi}:${s} ${d}.${m}.${y}`
    const htmTime = `Witaj, <text class="b">Jack Hillson</text> - ${czas}`
    document.getElementById("witaj").insertAdjacentHTML("beforeend", htmTime);

    let updatedAllData = []
    let online = 0
console.log(data)
  fetch("https://crashme.pl/gta.php")
  .then((response) => response.json())
  .then((data2) => {

    for (const [ranga, hex1] of Object.entries(data)) {
      for (const [name, value] of Object.entries(hex1)) {
      updatedAllData[name] = {
        "ranga": ranga,
        "hex": value.hex,
        "ranga": ranga,
        "numer": value.numer,
        "oddzial":value.oddzial,
        "id": " ",
        "ping": " ",
        "status": "Niedostępny"
      };

      for (const [key, player] of Object.entries(data2)) {
        const hex = player.identifiers[0].slice(6)
        const id = player.id
        const ping = player.ping
    
      if (value.hex == hex) {
          updatedAllData[name] = {
            "ranga": ranga,
            "hex": value.hex,
            "numer": value.numer,
            "oddzial":value.oddzial,
            "id": id,
            "ping": ping,
            "status": "Dostępny"
          }
          let index = 1;
          online = index++
      
      const htmOnline = online
      console.log(online)
      document.getElementById("online").insertAdjacentHTML("beforeend", htmOnline);
     };
    }
  }
}
console.log(updatedAllData)
    for (const [key, player] of Object.entries(updatedAllData)) {
          const htm =
            `<div class="status">
            <div class="margines1">${player.id}</div>
            <div class="margines2">${player.ping}</div>
          <div class="margines3">${key}</div>
          <div class="margines4">${player.ranga}</div>
          <div class="margines5">${player.oddzial}</div>
          <div class="margines6">${player.numer}</div>
          <div class="margines7${player.status}">${player.status}</div>
        </div>`;

          document.getElementById(`lista_${player.status}`).insertAdjacentHTML("beforeend", htm);
          if (player.status == `Dostępny`) {
            online += 1;
          }
    }
      const htmOnline = online
      document.getElementById("online").insertAdjacentHTML("beforeend", htmOnline);
  
})
    })
 
  
