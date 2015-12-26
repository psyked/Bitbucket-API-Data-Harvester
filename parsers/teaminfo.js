"use strict";

var request = require("request"),
    fs = require('fs');

function init(team) {
    var url = "https://bitbucket.org/api/2.0/teams/" + team + "/members?pagelen=100";
    request({
        url: url,
        json: true
    }, function(error, response, body) {
        if(!error && response.statusCode === 200) {
            fs.writeFileSync("teaminfo.json", JSON.stringify(body, null, 4));
        }
    });
}

module.exports = {
    init: init
};