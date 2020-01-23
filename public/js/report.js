const finalreportbutton=document.querySelector("#final-report")
const finalpdfbutton=document.querySelector("#final-pdf")
const finalTableBody=document.querySelector(".table-final-body")
const namelist = getfinalnamelist()
const symptomslist = getfinalsymptomslist()
const diagnosislist = getfinaldiagnosislist()
const prescriptionlist = getfinalprescriptionlist()
const advicelist = getfinaladvicelist()
let finalreport = {}

function generateFinalReport(){ 
    let key=""
    let val=""
    if(namelist.length!=0)
    {
        key=namelist[0].split("-")[0]
        val = namelist[0].split("-")[1]
        // console.log(key)
        // console.log(val)
        finalreport[key]=val
        // console.log(finalreport)
    }
    if(symptomslist.length!=0)
    {
        key=symptomslist[0].split("-")[0]
        val = symptomslist[0].split("-")[1]
        finalreport[key]=val
        // console.log(finalreport)
    }
    if (diagnosislist.length != 0) {
        key = diagnosislist[0].split("-")[0]
        val = diagnosislist[0].split("-")[1]
        finalreport[key] = val
        // console.log(finalreport)
    }
    if (prescriptionlist.length != 0) {
        key = prescriptionlist[0].split("-")[0]
        val = prescriptionlist[0].split("-")[1]
        finalreport[key] = val
        // console.log(finalreport)
    }
    if (advicelist.length != 0) {
        key = advicelist[0].split("-")[0]
        val = advicelist[0].split("-")[1]
        finalreport[key] = val
        // console.log(finalreport)
    }
    console.log(finalreport)
    makeFinalTable()
}

function makeFinalTable(){
    for(var key in finalreport)
    {
        let tr =document.createElement("tr")
        let th = document.createElement("th")
        let td = document.createElement("td")
        th.innerHTML=key
        td.innerHTML=finalreport[key]
        finalTableBody.appendChild(tr)
        tr.appendChild(th)
        tr.appendChild(td)
    }
}
function generatePDF() {
    var sTable = document.getElementsByClassName("table-final");

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
    console.log(window)
}

finalreportbutton.addEventListener("click",function(){
    generateFinalReport()
})

finalpdfbutton.addEventListener("click",function(){
    generatePDF()
})
