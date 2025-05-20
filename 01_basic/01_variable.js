const accountId = 1234
let accountEmai = "ranjeet@gmail.com"
var accountPassword = 1234567
accountCity = "Patna"
let accountState

//accountId = 4578 can not change const value

console.log(accountId);
console.table([accountId, accountEmai, accountPassword, accountCity, accountState])

/*
    Prefered NOT to use var because for function scope
    do not create variable without scope


    let -> variable can change data but scope safe
    const -> variable value can not be changed in feature
    var -> do not use because of scope issue in javaScript
*/

accountEmai = "ranjeetkumar@gmail.com"
accountPassword = 68973849
accountCity = "Bangalore"
accountState = "Karnataka"

console.table([accountId, accountEmai, accountPassword, accountCity, accountState])

