const inputbtn=document.querySelector(".dob");
const calculatebtn=document.querySelector(".calbtn");
const result=document.querySelector(".age-result");

calculatebtn.addEventListener("click",() => {
if(inputbtn.value==""){
    alert("Please enter your date of birth");
}
else{
    const dob=new Date(inputbtn.value);
    const dob_year=dob.getFullYear();
    const now=new Date();
    const now_year=now.getFullYear();
    const age=now_year-dob_year;

    result.innerHTML=`Your age is ${age}`;

}
});
