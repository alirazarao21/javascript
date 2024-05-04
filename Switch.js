const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Fabruary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("May");
        break;

    default:
        console.log("default value is printed");
        break;
}
 
// what if we have a  string datatype to match

const monh = "APR"
switch (monh) {
    case "Jan":
        console.log("january");
        break;
    case "Feb":
        console.log("Fabruary");
        break;
    case "MAR":
        console.log("march");
        break;
    case "APR":
        console.log("april");
        break;
    case "MAY":
        console.log("May");
        break;

    default:
        console.log("default value is printed");
        break;
}