let arrayMRP = [];
let arrayMEDICINES = [];

const addrow = document.getElementById('addRow'); 
addrow.addEventListener('click',newMedicine);

const deleterow = document.getElementById('deleteRow'); 
deleterow.addEventListener('click',deleteMedicine);

const updateRow = document.getElementById('updateRow'); 
updateRow.addEventListener('click',UpdateMedicine);

var display = document.getElementById("display");
var Total = document.getElementById("total");


var row = 1;
let AllTotal=0;


var intervalID = setInterval(CurrentTime, 1000);

function CurrentTime(){
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.getElementById('CurrentTime').innerHTML = "Time- " + hour + ":" + min + ":" + sec;
}


function newMedicine() {

        var medicine= document.getElementById('medicine').value;
        var unit= document.getElementById('unit').value;
        var quantity= document.getElementById('quantity').value;
        var discount= document.getElementById('discount').value;
        var mrp = document.getElementById('mrp').value; 

        let medicines = [medicine,unit,quantity,discount,mrp];
        arrayMEDICINES.push(medicines);

        document.getElementById('medicine').value= '';
        document.getElementById('unit').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('discount').value = '';
        document.getElementById('mrp').value = ''; 


        if(!medicine || !unit || !quantity || !discount || !mrp)
        {
            alert("Please fill all the boxes");
            return;
        }

        var totalforOne = (mrp/unit)*quantity-(((mrp/unit)*quantity)*(discount/100));
        totalforOne = roundNumber(totalforOne, 2);
        arrayMRP.push(totalforOne);
         AllTotal = totalforOne + AllTotal;
    


        var  newrow = display.insertRow(row);
        var cell0 = newrow.insertCell(0);
        var cell1 = newrow.insertCell(1);
        var cell2 = newrow.insertCell(2);
        var cell3 = newrow.insertCell(3);
        var cell4 = newrow.insertCell(4);
        var cell5 = newrow.insertCell(5);
        var cell6 = newrow.insertCell(6);



        cell0.innerHTMl = ''
        cell1.innerHTML = medicine;
        cell2.innerHTML = unit;
        cell3.innerHTML = quantity;
        cell4.innerHTML = discount;  
        cell5.innerHTML = mrp; 
        cell6.innerHTML = '<b>' + totalforOne + '<b>'; 
        row++;




        var deleteRow = Total.deleteRow(0);
        var nextRow = Total.insertRow(0);
        var nextColumn = nextRow.insertCell(0);
        var nextColumn1 = nextRow.insertCell(1);
        nextColumn.innerHTML = '<b>Total<b></h3>';
        nextColumn1.innerHTML = '<b>₹' +roundNumber(AllTotal, 2)+'</b>';


        var RowsLength = display.rows.length;

        for(let i=0;i<RowsLength-1;i++)
        {
            display.rows[i+1].cells[0].innerHTML = i+1;
        }
    
        


}

function deleteMedicine() {

    if(row>2)
    {
        row--;
    var deleteRow = display.deleteRow(row);
    arrayMEDICINES.pop(row);
    
    AllTotal =  AllTotal - arrayMRP.pop(row);
    var deleteRow = Total.deleteRow(0);
    var nextRow = Total.insertRow(0);
    var nextColumn = nextRow.insertCell(0);
    var nextColumn1 = nextRow.insertCell(1);
    nextColumn.innerHTML = '<b>Total<b>';
    nextColumn1.innerHTML ='<b>₹'+ roundNumber(AllTotal, 2) +'</b>';
    }
    else if(row==2)
    {
        row--;
        display.deleteRow(row);
        AllTotal =  AllTotal - arrayMRP.pop(0);
        Total.deleteRow(0);
        Total.insertRow(0);

    }
    else
    {
        alert("No Data to Delete!");
        return;
    }
    
}

function UpdateMedicine() {
    let UpdatedRow = document.getElementById('UpdatedRow').value;
    if(UpdatedRow<row && UpdatedRow!=null && UpdatedRow!=0){


    if(row>2)
    {
    row--;
    


    let medicine = arrayMEDICINES[UpdatedRow-1];
    arrayMEDICINES.splice(UpdatedRow-1,UpdatedRow-1)
    display.deleteRow(UpdatedRow);
    
    document.getElementById('mrp').value = medicine.pop(4); 
    document.getElementById('discount').value = medicine.pop(3);
    document.getElementById('quantity').value = medicine.pop(2);
    document.getElementById('unit').value = medicine.pop(1);
    document.getElementById('medicine').value = medicine.pop(0);


    AllTotal =  AllTotal - arrayMRP[UpdatedRow-1];
    arrayMRP.splice(UpdatedRow-1,UpdatedRow-1)
    var deleteRow = Total.deleteRow(0);
    var nextRow = Total.insertRow(0);
    var nextColumn = nextRow.insertCell(0);
    var nextColumn1 = nextRow.insertCell(1);
    nextColumn.innerHTML = '<b>Total<b>';
    nextColumn1.innerHTML ='<b>₹'+ roundNumber(AllTotal, 2) +'</b>';

    document.getElementById('UpdatedRow').value = '';
    }

    else if(row==2)
    {
        row--;
        let medicine = arrayMEDICINES.pop(UpdatedRow-1);
        display.deleteRow(UpdatedRow);
        
        
        
        document.getElementById('mrp').value = medicine.pop(4); 
        document.getElementById('discount').value = medicine.pop(3);
        document.getElementById('quantity').value = medicine.pop(2);
        document.getElementById('unit').value = medicine.pop(1);
        document.getElementById('medicine').value = medicine.pop(0);

        
        
        AllTotal =  AllTotal - arrayMRP.pop(0);
        Total.deleteRow(0);
        Total.insertRow(0);

        document.getElementById('UpdatedRow').value = '';
    }

    var RowsLength = display.rows.length;

for(let i=0;i<RowsLength-1;i++)
{
    display.rows[i+1].cells[0].innerHTML = i+1;
}

}

}




function roundNumber(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
  }






