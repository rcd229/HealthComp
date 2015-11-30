var Reminder = function(category){
    this.category = category;
    this.picture="";
    this.title="";
    this.description="";
    this.month=null;
    this.day=null;
    this.year=null;
    this.time="";
    this.repeat="";
  };

Reminder.prototype.setPicture = function (photourl){
	this.picture = photourl;
}

Reminder.prototype.setTitle = function (title){
	this.title = title;
}

Reminder.prototype.setDescription = function (description){
	this.description = description;
}

Reminder.prototype.setDate = function (date){
	this.date = date;
}

Reminder.prototype.setRepeat = function (repeat){
	this.repeat = repeat;
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