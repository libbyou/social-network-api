const connection = require('../config/connection');
const Thought = require('../models/Thought');
const User = require('../models/User');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the students
  const users = [];

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const thoughts = getRandomThoughts(20);

    const username = getRandomUsername();

    users.push({
      username,
      thoughts
    });
  }

  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'This is a thought'
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});