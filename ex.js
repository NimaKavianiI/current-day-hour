//courrent day

let today=new Date();
//console.log(today);

let day=today.getDay()
//console.log(day);

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//console.log(dayList);

console.log("today is: " +dayList[day]+".");

//current hour

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
//console.log(hour,minute,second);

var prepand=(hour=>12)?"pm":"am"
//console.log(prepand);

hour=(hour>=12)?hour-12:hour;
//console.log(hour);

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}

if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
console.log("Current Time: " + hour  + " : " + minute + " : " + second +  prepand); 
