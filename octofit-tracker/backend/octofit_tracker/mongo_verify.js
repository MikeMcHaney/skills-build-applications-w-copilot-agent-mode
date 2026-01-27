// Run with: mongosh < mongo_verify.js
use octofit_db;
print('Collections:');
printjson(db.getCollectionNames());
print('Sample users:');
printjson(db.users.find().limit(2).toArray());
print('Sample teams:');
printjson(db.teams.find().limit(2).toArray());
print('Sample activities:');
printjson(db.activities.find().limit(2).toArray());
print('Sample leaderboard:');
printjson(db.leaderboard.find().limit(2).toArray());
print('Sample workouts:');
printjson(db.workouts.find().limit(2).toArray());
print('User email index:');
printjson(db.users.getIndexes());
