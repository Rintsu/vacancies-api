fetch('http://gis.vantaa.fi/rest/tyopaikat/v1')
.then(function(response){
	return response.json();
})
.then(function(recruitJson){
	console.log(JSON.stringify(recruitJson));

	fetch('http://gis.vantaa.fi/rest/tyopaikat/v1/Terveydenhuolto')
	.then(function(response){
		return response.json();
	})
	.then(function(healthCareJson){

var ctx = document.getElementById('myCanvas').getContext('2d');
var canvas = new Chart(ctx, {
	type: 'bar',
	data: {
		labels: [recruitJson[1].ammattiala, recruitJson[2].ammattiala, recruitJson[3].ammattiala, recruitJson[4].ammattiala,
						recruitJson[5].ammattiala, recruitJson[6].ammattiala, recruitJson[7].ammattiala, recruitJson[8].ammattiala,
						recruitJson[9].ammattiala],
		datasets: [{
			label: 'Number of open vacancies',
			data: [recruitJson[1].lukumäärä, recruitJson[2].lukumäärä, recruitJson[3].lukumäärä,
						recruitJson[4].lukumäärä, recruitJson[5].lukumäärä, recruitJson[6].lukumäärä,
						recruitJson[7].lukumäärä, recruitJson[8].lukumäärä, recruitJson[9].lukumäärä],
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgba(255,99,132)',
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	}
});


myList = new dhtmlXList({
    container:"data_container",
    type:{
        template:"#jobTitle# <br/> #jobKey# <br/> #dueDate#",
				height:80
    }
});

for(let i = 0; i < healthCareJson.length; i++){
	myList.add({
			jobTitle: "Job title: " + healthCareJson[i].tyotehtava,
			jobKey: "Job key: " + healthCareJson[i].tyoavain,
			dueDate: "Last day to apply: " + healthCareJson[i].haku_paattyy_pvm
	});
}


}); //end of recruitJson
}); //end of healthCareJson
