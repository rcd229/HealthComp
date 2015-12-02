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

Reminder.prototype.timeToString = function() {
    var timestring = date + " at " + time;
    return timestring;
}

Reminder.prototype.getDate = function() {
    var date=[this.month, this.day, this.year];
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
    var rArray = reminder.split("&&");
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
}