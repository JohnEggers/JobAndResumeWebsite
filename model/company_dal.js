var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM company;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(company_id, callback) {
    var query = 'SELECT c.* FROM company c ' +
        'WHERE c.company_id = ?';
    var queryData = [company_id];
    console.log(query);

    connection.query(query, queryData, function(err, result) {

        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO company (company_name, streetname, streetnum, zip, state, city) VALUES (?, ?, ?, ?, ?, ?)';
    var queryData = [params.company_name, params.streetname, params.streetnum, params.zip, params.state, params.city];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


