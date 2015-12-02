var User = function(){
    this.username = "";
    this.password = "";
    this.alarms = new Array();
    this.tasks = new Array();
    this.events = new Array();
    this.other = new Array();
    this.today = new Array();

    this.addReminder = function(reminder) {
	var category = reminder.getCategory();
	if (category == "alarm") {
		this.alarms.push(reminder);
	}
	else if (category == "event") {
		this.events.push(reminder);
	}
	else if (category == "task") {
		this.tasks.push(reminder);
	}
	else {
		this.other.push(reminder)
	}
};
  };

User.prototype.setUsername = function(username) {
	this.username = username;
}

User.prototype.getUsername = function() {
	return this.username;
};

User.prototype.setPassword = function(password){
	this.password = password;
}

User.prototype.getCategory = function(category) {
	if (category == "alarms") {
		return this.alarms;
	}
	else if (category == "events") {
		return this.events;
	}
	else if (category == "tasks") {
		return this.tasks;
	}
	else {
		return this.other;
	}
};

User.prototype.getAllCategories = function() {
	return this.alarms.concat(this.events.concat(this.tasks.concat(this.other)));
}

User.prototype.removeReminder = function(reminder) {
    var category = reminder.getCategory();
    if (category == "alarm") {
        var ind = this.alarms.indexOf(reminder);
        if (ind != -1) {
            this.alarms.splice(ind, 1);
            console.log(this.alarms);
        }
    }
    else if (category == "event") {
        var ind = this.events.indexOf(reminder);
        if (ind != -1) {
            this.events.splice(ind, 1);
            console.log(this.events);
        }
    }
    else if (category == "task") {
        var ind = this.tasks.indexOf(reminder);
        if (ind != -1) {
            this.tasks.splice(ind, 1);
            console.log(this.tasks);
        }
    }
    else {
        var ind = this.other.indexOf(reminder);
        if (ind != -1) {
            this.other.splice(ind, 1);
            console.log(this.other);
        }
    }
}

User.prototype.toString = function(){
	return this.username + "\n" + this.password + "\n" + this.alarms.toString() + "\n" + this.tasks.toString() + "\n" + this.events.toString() + "\n" + this.other.toString(); 
}

User.prototype.fromString = function(user) {
	var uArray = user.split("\n");
	this.username = uArray[0];
    this.password = uArray[1];
    this.alarms = uArray[2].split(',');
    if (this.alarms[0] == "") {
    	this.alarms.pop();
    }
    for (var i = 0; i < this.alarms.length; i++) {
    	var rem = new Reminder();
    	rem.fromString(this.alarms[i]);
    	this.alarms[i] = rem;
    }
    this.tasks = uArray[3].split(',');
    if (this.tasks[0] == "") {
    	this.tasks.pop();
    }
    for (var i = 0; i < this.tasks.length; i++) {
    	var rem = new Reminder();
    	rem.fromString(this.tasks[i]);
    	this.tasks[i] = rem;
    }
    this.events = uArray[4].split(',');
    if (this.events[0] == "") {
    	this.events.pop();
    }
    for (var i = 0; i < this.events.length; i++) {
    	var rem = new Reminder();
    	rem.fromString(this.events[i]);
    	this.events[i] = rem;
    }
    this.other = uArray[5].split(',');
    if (this.other[0] == "") {
    	this.other.pop();
    }
    for (var i = 0; i < this.other.length; i++) {
    	var rem = new Reminder();
    	rem.fromString(this.other[i]);
    	this.other[i] = rem;
    }
    console.log(this);
}

var Reminder = function(){
    this.category = "";
    this.picture="";
    this.title="";
    this.description="";
    this.month=0;
    this.day=0;
    this.year=0;
    this.hour=0;
    this.minute=0;
    this.repeat="";
  };

Reminder.prototype.setCategory = function(category){
    this.category = category;
}

Reminder.prototype.setPicture = function (photourl){
	this.picture = photourl;
}

Reminder.prototype.setTitle = function (title){
	this.title = title;
}

Reminder.prototype.setDescription = function (description){
	this.description = description;
}

Reminder.prototype.setDate = function (month,day,year,hour,minute){
	this.month = month;
    this.day = day;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
}

Reminder.prototype.setRepeat = function(repeat) {
    this.repeat = repeat;
}

Reminder.prototype.getCategory = function() {
    return this.category;
}

Reminder.prototype.getPicture = function() {
    return this.picture;
}

Reminder.prototype.getTitle = function (){
    return this.title;
}

Reminder.prototype.getDescription = function(){
	return this.description;
}

Reminder.prototype.getRepeat = function() {
	return this.repeat;
}

Reminder.prototype.getTime = function() {
	return [this.hour, this.minute];
}

Reminder.prototype.timeToString = function() {
	var tod="";
	var newh="";
	var min="";
	if (this.hour < 12) {
		tod="AM";
		if (this.hour == 0) {
			newh="12";
		}
		else {
			newh = "" + this.hour;
		}
	}
	else {
		tod="PM";
		if (this.hour > 12) {
			newh = "" + (this.hour-12);
		}
		else {
			newh = "" + this.hour;
		}
	}
	console.log(this.minute);
	if (this.minute < 10) {
		min = "0" + this.minute
	}
	else {
		min = "" + this.minute;
	}
	var today = new Date();
	var month = today.getMonth();
	var day = today.getDate();
	var year = today.getFullYear();

	var timestring="";
	if ((this.year > year) || ((this.month > month || (this.month == month && this.day > day)) && !(this.year < year))) {
		timestring = this.dateToString() + " - ";
	}

	var repeats="";
	if (this.repeat.length > 0) {
		repeats=" - "
	}
	for (var i = 0; i < this.repeat.length; i++) {
		repeats = repeats + " " + this.repeatToString(this.repeat[i]);
	}
    timestring = timestring + newh + ":" + min + " " + tod + repeats;
    return timestring;
}

Reminder.prototype.dateToString = function(){
	var m="";
	if (this.month == 0) {
		m="Jan";
	}
	else if (this.month == 1) {
		m="Feb";
	}
	else if (this.month == 2) {
		m="Mar";
	}
	else if (this.month == 3) {
		m="Apr";
	}
	else if (this.month == 4) {
		m="May";
	}
	else if (this.month == 5) {
		m="Jun";
	}
	else if (this.month == 6) {
		m="Jul";
	}
	else if (this.month == 7) {
		m="Aug";
	}
	else if (this.month == 8) {
		m="Sep";
	}
	else if (this.month == 9) {
		m="Oct";
	}
	else if (this.month == 10) {
		m="Nov";
	}
	else {
		m="Dec";
	}

	var date = m + " " + this.day +", " + this.year;
	return date; 
}

Reminder.prototype.repeatToString = function(repeat) {
	var repstring="";
	if (repeat == "0") {
		repstring = "Sun";
	}
	else if (repeat == "1") {
		repstring = "Mon"
	}
	else if (repeat == "2") {
		repstring = "Tue"
	}
	else if (repeat == "3") {
		repstring = "Wed"
	}
	else if (repeat == "4") {
		repstring = "Thu"
	}
	else if (repeat == "5") {
		repstring = "Fri"
	}
	else if (repeat == "6") {
		repstring = "Sat"
	}
	else {
		repstring = repeat;
	}
	return repstring;
}

Reminder.prototype.getDate = function() {
    var date=[this.month, this.day, this.year];
    return date;
}

Reminder.prototype.toString = function() {
    return this.category + "&&"
        + this.picture + "&&"
        + this.title + "&&"
        + this.description + "&&"
        + this.month + "&&"
        + this.day + "&&"
        + this.year + "&&"
        + this.hour + "&&"
        + this.minute + "&&"
        + this.repeat.toString();
}

Reminder.prototype.fromString = function(reminder) {
	console.log(reminder);
    var rArray = reminder.split("&&");
    console.log(rArray);
    this.category = rArray[0];
    this.picture = rArray[1];
    this.title = rArray[2];
    this.description = rArray[3];
    this.month = rArray[4];
    this.day = rArray[5];
    this.year = rArray[6];
    this.hour = rArray[7];
    this.minute = rArray[8];
    this.repeat = rArray[9].split(',');
    if (this.repeat[0] == "") {
    	this.repeat.pop();
    }
}