//Logical operators(&&,||,!)
let signin=true;
let details=true;
let validation=true;
if(!signin&&details&&validation){
    console.log("email is send to your mail")
}
else if(signin||details){
    console.log("check validation")
}
else
{
    console.log("kindly fill the details")
}