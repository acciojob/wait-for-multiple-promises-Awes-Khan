
const tbody = document.getElementById("output");
const row = tbody.insertRow(0);
row.innerHTML = `<td colspan="2">Loading...</td>`;

let promises = [];
for(i=0;i<3;i++){
  const time = Math.random() * 2 + 1;

	promises.push(
		new Promise((resolved, rejected)=>{
		  setTimeout(() => resolve({ i, time: time.toFixed(3) }), time * 1000);
		})
	)
}

const startTime = performance.now();

Promise.all(promises).then((result)=>{
    const totalTime = (performance.now() - startTime) / 1000;
    tbody.removeChild(loadingRow);
    
    result.forEach(({i, time})=>{
      const row = document.createElement("tr");
      row.innerHTML = `<td>Promise ${id}</td><td>${time} seconds</td>`;
      table.appendChild(row);
    });
    
    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)} seconds</td>`;
    table.appendChild(totalRow);
    
}).catch((error)=>{});

