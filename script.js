function calBMI(weight, height){
    let bmi = weight/(height/100)**2
    return bmi
}

function riskLevel(bmi){
    if(bmi >= 30 ){
        level = "อ้วนมาก / โรคอ้วนระดับ 3"
    } else if(bmi >= 25){
        level = "อ้วน / โรคอ้วนระดับ 2"
    } else if(bmi >= 23){
        level = "ท้วม / โรคอ้วนระดับ 1"
    } else if(bmi >= 18.5){
        level = "ปกติ (สุขภาพดี)"
    } else {
        level = "น้ำหนักน้อย / ผอม"
    }
    return level
}

function displayResult(weight, height){

    let bmi = calBMI(weight, height)
    document.getElementById("bmi").value = bmi
    document.getElementById("level").value = riskLevel(bmi)
}

function validate(){

    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight == "" && height != ""){
        document.getElementById("validateWeight").style.display = "block"
    }
    if(height == "" && weight != ""){
        document.getElementById("validateHeight").style.display = "block"
    }
    if(weight == "" && height == ""){
        document.getElementById("validateWeight").style.display = "block"
        document.getElementById("validateHeight").style.display = "block"
    }
    else {
        document.getElementById("validateWeight").style.display = "none"
        document.getElementById("validateHeight").style.display = "none"
        displayResult(weight, height)
    }
}

