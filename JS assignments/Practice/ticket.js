function caught_Speed(speed,bool){
    if(bool==false && speed<=60){            
        return "No Ticket -0"
     }else if(bool==true && speed<=65){      
            return "No Ticket - 0"
     }else if(bool==true && speed>65 && speed<85){
                return "Small Ticket -1"
            }else if(bool==false && speed>61 && speed <80){
                    return "Small Ticket -1"
                }else if(bool==true && speed>85){ 
                    return "Big Ticket -2"
                }else if(bool==false && speed>81){
                        return "Big Ticket -2"
                    }else{
                        return "ticket"
                    }
        }
console.log(caught_Speed(82,true));




let arr=[1,2,3,40,5]

function myArray(argu){
    return Math.max(...argu)
}
console.log(myArray(arr));