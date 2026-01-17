const { Admin } = require('./models');
const bcrypt = require('bcryptjs');

async function createAdmin() {
  try {
    const username = process.argv[2] || 'admin';
    const password = process.argv[3] || 'admin123';
    const permissionLevel = process.argv[4] || 'full';

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin) {
      console.log(`Admin with username '${username}' already exists!`);
      process.exit(1);
    }

    // Create new admin
    const admin = await Admin.create({
      username,
      password,
      permissionLevel
    });

    console.log('Admin created successfully!');
    console.log('Username:', admin.username);
    console.log('Permission Level:', admin.permissionLevel);
    console.log('\nYou can now login with these credentials.');
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();
