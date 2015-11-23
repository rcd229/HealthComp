var Reminder = function(category){
    this.category = category;
    this.image="";
    this.title="";
    this.description="";
    this.date="";
    this.time="";
    this.repeat="";
  };

Reminder.prototype.setImage = function (photourl){
	this.photo = photourl;
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

Reminder.prototype.getImage = function() {
    return this.image;
}

Reminder.prototype.getTitle = function (){
    return this.title;
}

Reminder.prototype.timeToString = function() {
    var timestring = date + " at " + time;
    return timestring;
}