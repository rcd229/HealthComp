var Reminder = function(category){
    this.category = category;
    this.photo="";
    this.title="";
    this.description="";
    this.date="";
    this.repeat="";
  };

Reminder.prototype.setPhoto = function (photourl){
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