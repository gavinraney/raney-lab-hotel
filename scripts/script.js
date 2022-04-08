var dt = new Date();
document.getElementById("datetime").innerHTML = (("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()).slice(-2)) +":"+ (("0"+dt.getMinutes()).slice(-2));

var el = document.getElementById("submitLogin");

// click event on that element, run named f/n
el.addEventListener("click", displayUserName);

function displayUserName() {
  // grab the value of the user input
  var elName = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  //do something with it
  outputUNPW.innerText = elName
  outputUNPW.innerText = password
  ? `welcome in ${elName}. so cool :)`
  : `You haven't selected a valid account :(`;
}

$("#btn").on("click", () => {
  console.log("here");
  let selectedHamster;
  console.log("val" + selectedHamster);
  if ($("input:radio[name='hamsterName']").is(":checked")) {
    selectedHamster = $("input[name='hamsterName']:checked").val();
    // show the output:
  }
  output.innerText = selectedHamster
    ? `You selected ${selectedHamster}, good choice :)`
    : `You haven't selected a hamster :(`;
});
