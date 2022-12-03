let p = new Promise((resol,rej)=>{
    let a = 1 + 1;
    if(a == 2){
        resol ("pass")
    }else {
        rej ("fail")
    }
}
)