
function password(obj) {


    if (typeof obj !== 'object') {
        return `Please input the object `;
    }
    else if (!obj.name || !obj.birthYear || !obj.siteName) {
        return "Invalid Input"
    }
    else if (typeof obj.birthYear !== "number") {
        return "Your barth is a wrong";
    }

    else if (obj['birthYear'].toString().length !== 4) {
        return "Your Birthyear is Wrong";
    }
    else if (typeof obj.name !== "string" || typeof obj.siteName !== "string") {
        return `Please Your site name or name is Invalid`
    }

    let fast = obj.siteName.charAt(0);
    let uppercase = fast.toUpperCase();
    let split = obj.siteName.slice(1);
    let names = obj.name;
    let nam = names.toLowerCase();
    return `${uppercase}${split}#${nam}@${obj.birthYear}`

}


const input = password({ name: "toky" , birthYear: 2001, siteName: "facebook" });
console.log(input);