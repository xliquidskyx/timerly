const { Admin } = require('../models');
const db = require('../models');

// Skrypt do utworzenia pierwszego administratora
async function createAdmin() {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection established.');

    await db.sequelize.sync();

    const username = process.argv[2] || 'admin';
    const password = process.argv[3] || 'admin123';

    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin) {
      console.log('Admin already exists with username:', username);
      return;
    }

    const admin = await Admin.create({
      username,
      password,
      permissionLevel: 'full'
    });

    console.log('Admin created successfully!');
    console.log('Username:', admin.username);
    console.log('Password:', password);
    console.log('Permission Level:', admin.permissionLevel);
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();
