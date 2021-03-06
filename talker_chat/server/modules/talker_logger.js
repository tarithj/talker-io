
if (require.main === module){
    console.log("This module wont run by itself");
}

const date_ob = new Date()

// requirements
const terminal = require('terminal-kit').terminal;

//logger (without new line)
function message(text, color) {

    if (typeof (text) === undefined){
        terminal.red("WARNING undefined")
    }
    else if (typeof (color) === undefined) {
        terminal.red("WARNING undefined")
    }
    else if (color === "red") {
        terminal.red(text);
    }
    else if (color === "blue") {
        terminal.blue(text);
    }
    else if (color === "green") {
        terminal.green(text);
    }
    else if (color === "yellow") {
        terminal.yellow(text);
    }
    else if (color === "black") {
        terminal.black(text);
    }
    else if (color === "white") {
        terminal.white(text);
    }
    else if (color === "bold") {
        terminal.bold(text);
    }
    else if (color === "none") {
        terminal.defaultColor(text);
    }
    else if (color === "cyan") {
        terminal.cyan(text);
    }
    else if (color === "magenta") {
        terminal.magenta(text);
    }
    else if (color === "gray") {
        terminal.gray(text);
    }
    else if (color === "pink") {
        terminal.red.dim(text)
    }
    else {
        return "error"
    }
}

//logger (with new line)
function message_nl(text, color) {
    text = text + '\n'
    if (typeof(text) === undefined || typeof (color) === undefined) {
        terminal.red("WARNING undefined")
    }
    else if (color === "red") {
        terminal.red(text);
    }
    else if (color === "blue") {
        terminal.blue(text);
    }
    else if (color === "green") {
        terminal.green(text);
    }
    else if (color === "yellow") {
        terminal.yellow(text);
    }
    else if (color === "black") {
        terminal.black(text);
    }
    else if (color === "white") {
        terminal.white(text);
    }
    else if (color === "bold") {
        terminal.bold(text);
    }
    else if (color === "none") {
        terminal.defaultColor(text);
    }
    else if (color === "cyan") {
        terminal.cyan(text);
    }
    else if (color === "magenta") {
        terminal.magenta(text);
    }
    else if (color === "gray") {
        terminal.gray(text);
    }
    else if (color === "pink") {
        terminal.red.dim(text)
    }
    else {
        eventEmitter.emit('logger: unknown error');
    }

}


//date
function date(data){
    let date = ("0" + date_ob.getDate()).slice(-2)
    let month = (date_ob.getMonth()+1)
    let year = date_ob.getFullYear()
    let hours = date_ob.getHours()
    let minutes = date_ob.getMinutes()
    let seconds = date_ob.getSeconds()

    if (date === undefined){return 'undefined'}
    else if ((data === "ymd") || (date === "yearmonthdate") || (data === "YMD")){
        return(year + '-' + month + "-" + date)
    }
    else if ((data === "ymdhms") || (data === "yearmonthdatetime") || (data === "YMDHMS")){
        return (year + '-' + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    }
    else if ((data === "hm") || (data === "hoursminutes") || (data === "HM")){
        return (hours + ":" + minutes)
    }
}
module.exports = {message, message_nl, date}
