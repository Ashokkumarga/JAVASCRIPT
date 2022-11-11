function lifeInWeeks(age) {
       
    var total_Months=(90*12);
    var present_Months=(age*12);
        remaining_Months=(total_Months - present_Months);
        
    var total_Weeks=(90*52);
    var present_Weeks=(age*52);
        remaining_Weeks=(total_Weeks - present_Weeks);
    
    var total_Days=(90*365);
    var present_Days=(age*365);
        remaining_Days=(total_Days - present_Days);
        
        let result= `You have  ${remaining_Days} days  ${remaining_Weeks} weeks, and  ${remaining_Months} months left.`
        console.log(result);
    }
    lifeInWeeks(28)
    
    