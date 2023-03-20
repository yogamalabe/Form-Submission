var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var address=document.getElementById("address");
var pin=document.getElementById("pincode");
var state=document.getElementById("state");
var country=document.getElementById("country");  
var gender = document.getElementsByName("gender");
var fooditem = document.getElementsByName("food");
var form=document.getElementById("form");


var submit=document.getElementById("submit");
//submit.addEventListener("click",displayData);
document.body.append(submit);

function displayData(){ 
    var genderresult;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderresult = gender[i].value;
        }
    }

    var totalfoods = []
    var foodCounts = 0;
    for(let i=0;i<fooditem.length;i++){
        if(fooditem[i].checked){
            totalfoods.push(fooditem[i].value)
            foodCounts++;
        }
    }
    if(totalfoods.length>=2){
        result = totalfoods.join(", ")
        insertdata(fname.value,lname.value,address.value,pin.value,genderresult,result,state.value,country.value);

    }else{
        result = alert("Choose atleast 2 options out of 5 in food")
    }
     
}
function insertdata(firstname,lastname,finaladdress,finalpin,finalgender,finalfood,finalstate,finalcountry){   
    let tbody = document.getElementById("tablebody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = firstname;
    td2.innerHTML = lastname;
    td3.innerHTML = finaladdress;
    td4.innerHTML = finalpin;
    td5.innerHTML = finalgender;
    td6.innerHTML = finalfood;
    td7.innerHTML = finalstate;
    td8.innerHTML = finalcountry;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
    form.reset();
    //deleteinputfield();

}

function deleteinputfield() {
   
}