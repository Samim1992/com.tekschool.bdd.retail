Feature: Database SQL query feature

@sqlquery
Scenario: execute all the information from actor table

Given User Connect to PostgreSQL
When user sends "select * from public.actor"
Then user should get all information from that table
