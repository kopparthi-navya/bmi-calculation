let bmiForm=document.querySelector(".form");
bmiForm.addEventListener("submit",function(e){
    e.preventDefault(); // stop refresh
    const form=e.target; //event trigger ayye element
    const name=form.querySelector("#name").value;
    const weight=+form.querySelector("#weight").value;
    const height=+form.querySelector("#height").value;
    console.log(name,weight,height);
    let heightInMeters=height/100;
    let bmi=Number((weight/heightInMeters**2).toFixed(2));
    console.log("bmi",bmi);
    let result;
    if(bmi<18.5){
        console.log("Thin");
        result="Thin";
    }else if(bmi>25){
        console.log("Fat");
        result="Fat";

    }else{
        console.log("Normal");
        result="Normal";
    }
    form.querySelector("#result").textContent=`${name} , you are ${result}`;
    
});
document.querySelector("#reset").addEventListener("click",function(e){
    bmiForm.querySelector("#name").value="";
    bmiForm.querySelector("#weight").value="";
    bmiForm.querySelector("#height").value="";
    bmiForm.querySelector("#result").testContent="";
});