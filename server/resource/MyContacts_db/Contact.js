/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  FOR CUSTOMIZE Contact.js PLEASE EDIT ../custom/ContactCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_MyContacts_db = require('../../db/MyContacts_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/ContactCustom.js');

/*
 * SCHEMA DB Contact
 * 
	{
		email: {
			type: 'String',
			unique : true, 
		},
		name: {
			type: 'String', 
			required : true
		},
		note: {
			type: 'String'
		},
		phone: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		company: {
			type: Schema.ObjectId,
			ref : "Contact"
		},
		
	}
 * 
 */



//CRUD METHODS


//CRUD - CREATE
	
app.post(properties.api + '/contacts', function(req, res){
	obj = new db_MyContacts_db.Contact(req.body);
	obj.save(function(err){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - REMOVE

app['delete'](properties.api + '/contacts/:id', function(req, res){
	db_MyContacts_db.Contact.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

//CRUD - FIND BY company
	
app.get(properties.api + '/contacts/findBycompany/:key', function(req, res){

	db_MyContacts_db.Contact.find({ 'company' : req.params.key}).exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
	
});
	
//CRUD - GET ONE
	
app.get(properties.api + '/contacts/:id', function(req, res){
	db_MyContacts_db.Contact.findOne({_id:req.params.id}).exec(function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});
	
//CRUD - GET LIST
	
app.get(properties.api + '/contacts', function(req, res){
	db_MyContacts_db.Contact.find().exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});

//CRUD - EDIT
	
app.post(properties.api + '/contacts/:id', function(req, res){
	db_MyContacts_db.Contact.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function(err, obj){
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

