
const tbody = document.getElementById("output");
const loadingRow = tbody.insertRow(0);
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2">Loading...</td>`;

let promises = [];
for(i=0;i<3;i++){
  const time = Math.random() * 2 + 1;

	promises.push(
		new Promise((resolved, rejected)=>{
		  setTimeout(() => resolved({ i, time: time.toFixed(3) }), time * 1000);
		})
	)
}

const startTime = performance.now();

Promise.all(promises).then((result)=>{
    const totalTime = (performance.now() - startTime) / 1000;
    tbody.removeChild(loadingRow);
    
    result.forEach(({i, time})=>{
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${i}</td><td>${time} seconds</td>`;
      tbody.appendChild(row);
    });
    
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)} seconds</td>`;
    tbody.appendChild(totalRow);
    
}).catch((error)=>{});

