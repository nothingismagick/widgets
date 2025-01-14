#!/usr/bin/env node

require = require("esm")(module/*, options*/)

const {readFileSync} = require('fs');
const {fromJSONString} = require('../src/scores');
const {createContributorWall} = require('../src/svg');

// Minimum required cred to be listed.
// Note this is before rounding.
const MIN_CRED = process.env.SVG_MIN_CRED ? Number(process.env.SVG_MIN_CRED) : 0.5;

// Maximum users to display.
const MAX_USERS = process.env.SVG_MAX_USERS ? Number(process.env.SVG_MAX_USERS) : 50;

// Required env var check.
if(!process.env.SOURCECRED_GITHUB_TOKEN) {
	throw new Error('SOURCECRED_GITHUB_TOKEN env var must be set to a github personal access token.');
}

const USER_PER_ROW = 10;
const AVATAR_SIZE = 64;
const MARGIN = 5;

// Read all data from STDIN
const data = readFileSync(0, "utf-8");

// Parse score
const credData = fromJSONString(data);

createContributorWall(credData.users, process.env.SOURCECRED_GITHUB_TOKEN, {
	minCred: MIN_CRED,
	maxUsers: MAX_USERS,
	usersPerRow: USER_PER_ROW,
	avatarSize: AVATAR_SIZE,
	margin: MARGIN,
})
.then(console.log);
