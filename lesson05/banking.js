let balance = 0;
let transacting = true;
while (transacting) {
  let userSelection = window.prompt("Enter Q to Quit\nEnter W to Withdraw\nEnter D to Deposit\nEnter B to View Balance\n");
  switch(userSelection) {
    case 'Q': {
      transacting = false;
      break;
    }
    case 'W': {
      let withdrawl = window.prompt("How much would you like to withdraw? ");
      balance -= parseInt(withdrawl);
      break;
    }
    case 'D': {
      let deposit = window.prompt("How much would you like to deposit? ");
      balance += parseInt(deposit);
      break;
    }
    case 'B': {
      alert(balance);
      break;
    }
  }
}
