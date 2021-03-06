ge

  const options = {
    method: 'GET',
    headers: {
      //Accept: 'application/json',
     // 'Content-Type': 'application/json',
      Authorization: 'Bearer sk_test_27002a3d2b0750fe0dab8afc4e4305b2516d9969'
    }
  };
  
  let startPay = async function() {
    fetch('https://api.paystack.co/transaction/verify/' + transRef, options)
      .then(response => response.json())
      .then(response => paymentStatus(response))
     
      .catch(err => console.error(err));
  }
  
  startPay();
  
let paymentStatus = function (res) {
  if (res.data.status === 'success') {
    getAlertBox.style.display = "flex";
  } else {
    alert('failed')
  }
}

// https://api.paystack.co/transaction/verify/kid6po8oadPK?@??  ?  PK   M?;T               js/search.js
let getSearchBox = document.querySelector("#searchMeal");
let getSearchResultBox = document.querySelector("#searchResult");
let SmealData;



let searchForMeal = async function () {
    getSearchResultBox.innerHTML = "";
    let searchedValue = getSearchBox.value;

    if (searchedValue === "" ) {
     getSearchResultBox.innerHTML = "";
    } else if (searchedValue.charAt(0) == " ") {
        getSearchResultBox.innerHTML = `
            <p id="searchInputError">Invalid Input</p>
        `;
    } else {
        
    let Smeal = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchedValue);

    let SmealRes  = await Smeal.json();
    SmealData = SmealRes.meals;
    for (let i = 0; i < SmealData.length; i++) {
        
        getSearchResultBox.innerHTML += `
            <div class ="animate__animated animate__slideInUp animate_