
document.addEventListener('DOMContentLoaded', function() {
    const userName = prompt("Enter your name please:");
    const h1 = document.getElementById('myHeading');

    h1.textContent = `Hi ${userName.toUpperCase()}`;

    
  });
  
  function Calculate(){

    // Creating variables height and weight
    let heightFeet = document.getElementById("text1").value;
    let weight = document.getElementById("text2").value;
  
    if (weight === '' || heightFeet === ''){
        alert("Enter Weight and Height");
    } else if (weight <= 0 || heightFeet <= 0){
        alert("Error occured (Wrong weight or height entered)");
    } else {
        // Convert height from feet to centimeters
        let heightCm = heightFeet * 30.48;
        heightCm = Number(heightCm);
        weight = Number(weight);
  
        let BMI = (weight / ((heightCm**2) / 10000)).toFixed(2);
  
        alert("Your BMI is " + BMI);
  
        if (BMI < 18.5){
            alert("You are Underweight");
        }
        if (BMI >= 18.5 && BMI < 25){
            alert("You are healthy");
        }
        if (BMI >= 25 && BMI < 30 ){
            alert("You are overweighted");
        }
        if (BMI >= 30 ){
            alert("You are obese");
        }
    }
}
