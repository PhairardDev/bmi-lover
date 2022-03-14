function processBMI(){

    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight=="" || height==""){
        alert("กรุณากรอกข้อมูลน้ำหนักและส่วนสูง")
        return false
    }

    let bmiResult = calBMI(weight, height)
    let level = riskLevel(bmiResult)
    let row = ""

    if(level=="อ้วนมาก / โรคอ้วนระดับ 3"){
        row = "05"
    } 
    else if(level=="อ้วน / โรคอ้วนระดับ 2"){
        row = "04"
    }
    else if(level=="ท้วม / โรคอ้วนระดับ 1"){
        row = "03"
    }
    else if(level=="ปกติ (สุขภาพดี)"){
        row = "02"
    }
    else {
        row = "01"
    }
    
    document.getElementById("bmi").value = bmiResult
    document.getElementById("level").value = level
    document.getElementById("row-"+row).classList.add("table-warning")
}


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

