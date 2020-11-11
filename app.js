var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;










































// const  groupBy = require( 'lodash/groupBy' );

// const data = [
// 	{
// 		Team : "A",
// 		Member : "James",
// 		"Leads" : 305,
// 		closedLeads : 35

// 	},

// 	{
// 		Team : "C",
// 		Member : "Maria",
// 		"Leads" : 370,
// 		closedLeads : 51

// 	},

// 	{
// 		Team : "B",
// 		Member : "Travis",
// 		"Leads" : 240,
// 		closedLeads : 45

// 	},

// 	{
// 		Team : "A",
// 		Member : "Jon",
// 		"Leads" : 285,
// 		closedLeads : 39

// 	},

// 	{
// 		Team : "A",
// 		Member : "Adams",
// 		"Leads" : 190,
// 		closedLeads : 38

// 	},

// 	{
// 		Team : "B",
// 		Member : "Irene",
// 		"Leads" : 235,
// 		closedLeads : 40

// 	},

// 	{
// 		Team : "D",
// 		Member : "Sarah",
// 		"Leads" : 300,
// 		closedLeads : 53

// 	},

// 	{
// 		Team : "C",
// 		Member : "Mike",
// 		"Leads" : 270,
// 		closedLeads : 40

// 	}
// ]


// const teams = [...new Set(data.map(l => l.Team))];

// // console.log("teams " + teams)

// const k = [];
// for (let i of teams) {
// 	const obj = {};
// 	for (let j of data) {
// 		if (i === j.Team) {
// 			if (!obj[i]) {
// 				obj[i] = [];
// 			}
// 			obj[i].push(j);
// 		}
// 	}
// 	k.push(obj);
// }


// // console.log(k)

// k.forEach(currk => {
// 	for(var i in currk){
// 		var leads = 0, currleads = 0;
// 		// console.log(currk[i])
// 		for(var m = 0; m < currk[i].length; m++){
// 			// console.log(currk[i][m])
// 			leads += currk[i][m].Leads
// 			currleads += currk[i][m].closedLeads
// 			currk[i][m].effic = ((currk[i][m].closedLeads/currk[i][m].Leads)*100)
// 		}
// 		var eff = (currleads/leads) * 100;
// 		currk[i].eff = eff;

		
// 		currk[i].sort( (a, b) => (a.effic < b.effic) ? 1 : -1)
// 		/*Sorting */
// 		// console.log("aftwe")
// 		// console.log(currk[i])

// 	}
// })



// console.log("dnfsjkdsjk")
// k.sort((a, b) => {

//  	let [key1, value1] = Object.entries(a)[0];	

// 	let [key2, value2] = Object.entries(b)[0];	

// 	return value1.eff < value2.eff ? 1 : -1;
// } )


// for(var i of k )
// 	console.log(i)






