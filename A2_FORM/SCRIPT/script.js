

console.log("js is working fine ");
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const mail = document.getElementById('mail');
const fnamePara = document.getElementById('fname-para');
const lnamePara = document.getElementById('lname-para');
const mailPara = document.getElementById('mail-para');
const submit=document.querySelector('.submit');
const submitPara=document.getElementById('submit-para');
let form = document.querySelector('form'); 
var lnameCount=0;
var fnameCount=0;
var mailCount=0;
var count=0;


//------------------------------------------------*****--------------------------------------------
//VALIDATION PART


// First Name Validation
fname.addEventListener('blur', () => {
    let reg = /^[a-zA-Z][a-zA-Z0-9]{2,}$/; // Adjusted regex for names
    let str = fname.value;
    console.log("First name validation done");

    if (reg.test(str)) {
        fnameCount=1;
        console.log('First name is valid');
        fnamePara.style.display = "none";
        
    } else {
        fnameCount=0;
        console.log('First name is invalid');
        fnamePara.style.display = "block";
        
    }
});

// Last Name Validation
lname.addEventListener('blur', () => {
    let reg = /^[a-zA-Z][a-zA-Z0-9]{2,}$/; // Adjusted regex for names
    let str = lname.value;
    console.log("Last name validation done");

    if (reg.test(str)) {
        lnameCount=1;
        console.log('Last name is valid');
        lnamePara.style.display = "none";
        
    } else {
        lnameCount=0;
        console.log('Last name is invalid');
        lnamePara.style.display = "block";
        
    }
});

// Email Validation
mail.addEventListener('blur', () => {
    let reg = /^[a-zA-Z0-9._%+-]+@gmail\.com$/; // Correct email regex
    let str = mail.value; // Use mail.value, not fname.value
    console.log("Email validation done");

    if (reg.test(str)) {
        mailCount=1;
        console.log('Email is valid');
        mailPara.style.display = "none";
        
    } else {
        mailCount=0;
        console.log('Email is invalid');
        mailPara.style.display = "block";
        
    }
});


//------------------------------------------------------------*********----------------------------------
//SUBMITION PART


//submitting the data to local storage

submit.addEventListener('click',  (e)=>{
    e.preventDefault();
    if(fnameCount==1 && lnameCount==1 && mailCount==1){
        submitPara.style.display="none";

        //taking out the values form the fields
        let name=fname.value;
        let Last=lname.value;
        let EMail=mail.value;
        let ADD=address.value;
        let arr = [name, Last, EMail, ADD]; 

        //setting the values to local storeage
        localStorage.setItem(`user${++count}`,JSON.stringify(arr));

        //now reset fucntionn will work which will set the entire form to balnk fields
        fname.value="";
        lname.value="";
        mail.value="";
        address.value="";



        //now the data will be fetched from the local storage amd will be displayed on the screen
        let result = localStorage.getItem(`user${count}`);
        let parsedResult = JSON.parse(result); // Parse the JSON string back into an array
        console.log(parsedResult); // Logs the array: ["lname", "fname", "E-Mail", "Address"]
        
        // Create an object by mapping array elements to keys
       let object = {
            "fname": parsedResult[0],  // Last name (first element of the array)
            "lname": parsedResult[1],  // First name (second element of the array)
            "EMail": parsedResult[2], // Email (third element of the array)
            "Adress": parsedResult[3]  // Address (fourth element of the array)
        };


        /*
        let div=document.createElement('div');
        let parentDiv=document.querySelector('.parent-div');
        div.className="data-block";
        parentDiv.append('div');
        div.innerHTML=object;
        */


        let div = document.createElement('div'); 
        div.className = "data-block"; // Assign a class for styling
        
        // Set the content of the div (format object data as HTML)
        div.innerHTML = `
            <p><strong>First Name:</strong> ${object.fname}</p>
            <p><strong>Last Name:</strong> ${object.lname}</p>
            <p><strong>Email:</strong> ${object.EMail}</p>
            <p><strong>Address:</strong> ${object.Adress}</p>
        `;
        
        // Append the new div as the last child inside the form (under the submit button)
        form.append(div);
        form.appen
        
        
               
    }
    else{
        submitPara.style.display="block";

    }

});




//FILE END
//----------------------------------------***---------------------------------------------











