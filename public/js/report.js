const sTable = document.getElementsByClassName("table-final");
let divPreviewTable = document.querySelector(".preview-table")
let inputEmail=document.querySelector(".input-email")
const finalreportbutton = document.querySelector("#final-report")
const finalpdfbutton = document.querySelector("#final-pdf")
const finalTableBody = document.querySelector(".table-final-body")
const namelist = getfinalnamelist()
const symptomslist = getfinalsymptomslist()
const diagnosislist = getfinaldiagnosislist()
const prescriptionlist = getfinalprescriptionlist()
const advicelist = getfinaladvicelist()
let finalreport = {}

//Helper functions
function generateFinalReport() {
    let key = "";
    let val = "";
    if (namelist.length != 0) {
        key = namelist[0].split("-")[0];
        if (namelist.length == 1) {
            val = namelist[0].split("-")[1];
        } else {
            for (var i = 0; i < namelist.length; i++) {
                val += `${i + 1}. ${namelist[i].split("-")[1]} `
            }
        }
        finalreport[key] = val
        val = ""
    }
    if (symptomslist.length != 0) {
        key = symptomslist[0].split("-")[0]
        if (symptomslist.length == 1) {
            val = symptomslist[0].split("-")[1]

        } else {
            for (var i = 0; i < symptomslist.length; i++) {
                val += `${i + 1}. ${symptomslist[i].split("-")[1]} `
            }
        }
        finalreport[key] = val
        val = ""
    }
    if (diagnosislist.length != 0) {
        key = diagnosislist[0].split("-")[0]
        if (diagnosislist.length == 1) {
            val = diagnosislist[0].split("-")[1]
        } else {
            for (var i = 0; i < diagnosislist.length; i++) {
                val += `${i + 1}. ${diagnosislist[i].split("-")[1]} `
            }
        }
        finalreport[key] = val
        val = ""
    }
    if (prescriptionlist.length != 0) {
        key = prescriptionlist[0].split("-")[0]
        if (prescriptionlist.length == 1) {
            val = prescriptionlist[0].split("-")[1]
        } else {
            for (var i = 0; i < prescriptionlist.length; i++) {
                val += `${i + 1}. ${prescriptionlist[i].split("-")[1]} `
            }
        }
        finalreport[key] = val
        val = ""
    }
    if (advicelist.length != 0) {
        key = advicelist[0].split("-")[0]
        if (advicelist.length == 1) {
            val = advicelist[0].split("-")[1]
        } else {
            for (var i = 0; i < advicelist.length; i++) {
                val += `${i + 1}. ${advicelist[i].split("-")[1]} `
            }
        }
        finalreport[key] = val
        val = ""
    }
    console.log(finalreport)
    makeFinalTable()
}

function makeFinalTable() {
    divPreviewTable.classList.add("active");
    for (var key in finalreport) {
        let tr = document.createElement("tr")
        tr.setAttribute("class", "row")
        let th = document.createElement("th")
        th.setAttribute("class", "col-3")
        let td = document.createElement("td")
        td.setAttribute("class", "col")
        td.style.textAlign = "left"
        th.innerHTML = key
        td.innerHTML = finalreport[key]
        finalTableBody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)
    }
    console.log( divPreviewTable.innerHTML+"");
    console.log("`````````````````````````````");
    console.log(divPreviewTable.innerHTML);
console.log(typeof divPreviewTable)
    // console.log(divPreviewTable.scrollHeight)
    // console.log(divPreviewTable.scrollWidth)
}

//create pdf  
function generatePDF() {
    let email=inputEmail.value;
    a4 = [divPreviewTable.scrollHeight, divPreviewTable.scrollWidth]; // for a4 size paper width and height
    
    // send Email is defined in frontend.js  

    sendEmail(divPreviewTable.innerHTML+"",email); 
    getCanvas().then(function (canvas) {
        var
            img = canvas.toDataURL("image/png"),
            doc = new jsPDF({
                unit: 'px',
                format: 'a4'
            });
        doc.addImage(img, 'JPEG', 20, 20);
        // doc.mailDoc(true, "akunagpal99@gmail.com", "", "", "hbdsj");
        doc.save('report.pdf');
        // await email(options)
    });
}

// create canvas object  
function getCanvas() {
    return html2canvas(divPreviewTable, {
        imageTimeout: 2000,
        removeContainer: true
    });
}

//Action Buttons
finalreportbutton.addEventListener("click", function () {
    generateFinalReport()
})

finalpdfbutton.addEventListener("click", function () {
    generatePDF()
})
