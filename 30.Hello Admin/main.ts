let users : string [] = ["eric","haseeb", "ali", "fatima", "admin",]

for (let user of users) {
    if(user === "admin") {
        console.log("Hello Admin, would you like to see a status report?")
    } else {
        console.log(` Hello ${user},    thankyou for logging in again`)
    }
}