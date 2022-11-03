// for loop

//Initilization statement 
// Conitional statement 
// Iterable statemnet

//eg:-1

for(i=1;i<=10;i++){
    console.log(i)
}

let details = [{ id: 101, name: "ashok", email: "ak@gmail.com" },
{ id: 102, name: "kumar", email: "kumar@gmail.com" }]
//print all employee names 
for(detail of details){
    console.log(detail.name)
}