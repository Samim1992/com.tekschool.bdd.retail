$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Database.feature");
formatter.feature({
  "line": 1,
  "name": "Database SQL query feature",
  "description": "",
  "id": "database-sql-query-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6709126100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "execute all the information from actor table",
  "description": "",
  "id": "database-sql-query-feature;execute-all-the-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sqlquery"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User Connect to PostgreSQL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user sends \"select * from public.actor\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should get all information from that table",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1901173400,
  "status": "passed"
});
});