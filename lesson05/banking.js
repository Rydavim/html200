banking();
function banking(balance = 0) {
  let userSelection = window.prompt("Enter Q to Quit\nEnter W to Withdraw\nEnter D to Deposit\nEnter B to View Balance\n");
  switch(userSelection) {
    case 'Q': { break; }
    case 'W': {
      let withdrawl = window.prompt("How much would you like to withdraw? ");
      return balance = balance - withdrawl;
    }
    case 'D': {
      let deposit = window.prompt("How much would you like to deposit? ");
      return balance = balance + deposit;
    }
    case 'B': {
      alert(balance);
      break;
    }
  }
}
