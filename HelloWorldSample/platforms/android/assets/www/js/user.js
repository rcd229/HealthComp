var User = function(){
    this.username = "";
    this.password = "";
    this.alarms = new Array();
    this.events = new Array();
    this.tasks = new Array();
    this.other = new Array();
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

User.prototype.addToCategory = function(category, reminder) {
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
		this.other.push(reminder);
	}
};

User.prototype.getCategory = function(category) {
	if (category == "alarm") {
		return this.alarms;
	}
	else if (category == "event") {
		return this.events;
	}
	else if (category == "task") {
		return this.tasks;
	}
	else {
		return this.other;
	}
};

User.prototype.getAllCategories = function() {
	return this.alarms.concat(this.events.concat(this.tasks.concat(this.other)));
}

User.prototype.toString = function(){
	return this.username + "\n" + this.password + "\n" + this.alarms.toString() + "\n" + this.events.toString() + "\n" + this.tasks.toString() + "\n" + this.other.toString(); 
}

User.prototype.fromString = function(user) {
	var uArray = user.split("\n");
	this.username = uArray[0];
    this.password = uArray[1];
    this.alarms = uArray[2];
    this.events = uArray[3];
    this.tasks = uArray[4];
    this.other = uArray[5];
}