# STM-Micro
Node playground to learn and understand technologies used on the STM-backend

## Overview
Goal: Learn the fundamental technologies required in order to contribute to the STM backend.

## Technologies:
- Node.js
- Express Webapplication/api
- MySql
- Chai Assertion Library
- Promise - Async functionality
- Docker
- AWS

## Scope:
Create a micro version of the STM backend. This will include user creation, campaigns, donations, user donations overview and STM overview.

## Iterations
1. Basic setup

Create a project with an example endpoint and integration test.

2. User Creation

Create a login endpoint that creates a user and persists it to the db. The endpoint should return correct http codes

3. Campaigns Endpoint

Create a mechanism to add new campaigns (likely to be an endpoint). Create an endpoint that returns campaigns. A query parameter should be accepted that can filter out active/non-active campaigns

4. Donate Endpoint

Create a donation endpoint that associates a donation with a user and a campaign. Update the campaigns endpoint to return amount of donors and data on how much of the goal has been reached

5. Overview Endpoint

Create an endpoint that aggregates data in different db tables. This should include…
- Campaign count active/non-active
- User count
- Donation count

6. Containerise Using Docker 

7. Deploy to AWS

