//create account- register a new account

function registerStore() {
    //fetch the values from html
    var userName = document.getElementById('userName').value;
    var accountNumber = document.getElementById('accountNumber').value;
    var password = document.getElementById('pwd').value;

    //create account details object
    var accountDetails = {
        UserName: userName,                                             
        AccNo: accountNumber,
        Password: password,
        balance: 0
    };

    // check if account no is already present
    if (accountNumber in localStorage) {
        alert("User already registered");
    }
    //to set details in the local storage
    else {
        localStorage.setItem(accountNumber, JSON.stringify(accountDetails));
        
        //redierect to the page
        window.location.href = "./login.html";
        alert("Registration successful");
    }
}
// "acn123"
// Password
// : 
// "123"
// UserName
// : 
// "Jinto Kurian"

// function login(){
//     var AccountNumber = document.getElementById('accountNumberLogin').value;
//     var LoginPassword = document.getElementById('pwdLogin').value;

//     var LoginDetails = {
//         acno: AccountNumber,
//         LoginPwd: LoginPassword
//     };
//     console.log(LoginDetails);

//     if(acno in localStorage){
//         accountDetails = JSON.parse(localStorage.getItem(acno));
//         if(LoginPwd==accountDetails.Password){
//             alert("Login successfull");
//             window.location="./home.html";
//         }else{
//             alert("Incorrect password");
//         }
//     }else{
//         alert("Invalide account number")
//     }

    
// }

function login(){
    var AccountNumber = document.getElementById('accountNumberLogin').value;
    var LoginPassword = document.getElementById('pwdLogin').value;

    var LoginDetails = {
        acno: AccountNumber,
        LoginPwd: LoginPassword
    };
    console.log(LoginDetails);

    var storedDetails = JSON.parse(localStorage.getItem(AccountNumber));

    if(storedDetails !== null){
        if(LoginPassword === storedDetails.Password){
            var username=storedDetails.UserName;
            console.log(username);
            window.location.href = "./home.html";  
            alert("Login successful");          
            welcome.innerHTML="Welcome "+username;
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Invalid account number");
    }
}


//Deposite
let amnt=0;
let withdraw=0;
let totalBalance=0;


function depositeMoney(){
    var depo_amount = parseFloat(document.getElementById('depoAmount').value);
    var depo_accno = document.getElementById('depoAccount').value;

    

    if(depo_accno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(depo_accno));
        if(depo_accno==accountDetails.AccNo && depo_amount<= 0){
            alert("Value cannot be empty or negative")
        }else{
            accountDetails.balance+=depo_amount;
            // alert(accountDetails.balance);
            localStorage.setItem(depo_accno, JSON.stringify(accountDetails));

            alert(`Your amount ${depo_amount} is succssfully added`)
            document.getElementById("balance_amount").innerHTML= `<div style="font-weight: 500; color: red;">Your current balance is ${accountDetails.balance} </div>`
        }
    }
}

function withdrawMoney(){
    var depo_amount = parseFloat(document.getElementById('withdrawAmount').value);
    var withdraw_amount = parseFloat(document.getElementById('withdrawAmount').value);

    var withdraw_accno = document.getElementById('withdrawAccount').value;

    

    if(withdraw_accno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(withdraw_accno));
        if(withdraw_accno==accountDetails.AccNo && withdraw_amount<= 0){
            alert("Value cannot be empty or negative")
        }else{
            accountDetails.balance-=withdraw_amount;
            // alert(accountDetails.balance);
            localStorage.setItem(withdraw_accno, JSON.stringify(accountDetails));

            alert(`Your amount ${withdraw_amount} is succssfully withdrawn`)
            document.getElementById("balance_amount_withdraw").innerHTML= `<div style="font-weight: 500; color: red;">Your current balance is ${accountDetails.balance} </div>`
        }
    }
}




































 // if(carDetails.key=="" ||carDetails.name==""||carDetails.price==""){
    //     alert("Fill in all the details");
    // }else{
    //     if(carDetails.key in localStorage){
    //         alert("Item already exists in the database");
    //     }else{
    //         localStorage.setItem(carDetails.key,JSON.stringify(carDetails))
    //         alert("Car Details added successfully");
    //     }
    // }