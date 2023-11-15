function giveBackPassw5(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      const element= str[i];
      if (element[i] < 5) {
        return true;
      }
    }
    return result;
  }
const passwod = ["alam", "afsikpngfo"]
console.log(giveBackPassw5(passwod));