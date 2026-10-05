const bcrypt = require("bcryptjs");
const db = require("./config/db");

async function seedTestUser() {
  try {
    const password = "Test@12345";
    const passwordHash = await bcrypt.hash(password, 10);

    // Create department
    await db.execute(
      `INSERT INTO departments
       (department_name, department_code)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE department_name = VALUES(department_name)`,
      ["Computer Science and Engineering", "CSE"]
    );

    const [departments] = await db.execute(
      `SELECT department_id
       FROM departments
       WHERE department_code = ?`,
      ["CSE"]
    );

    const departmentId = departments[0].department_id;

    // Create user
    const [userResult] = await db.execute(
      `INSERT INTO users
       (email, password_hash, role)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE
       password_hash = VALUES(password_hash),
       role = VALUES(role)`,
      [
        "test.student@achievementhub.local",
        passwordHash,
        "STUDENT",
      ]
    );

    let userId = userResult.insertId;

    if (!userId) {
      const [users] = await db.execute(
        `SELECT user_id
         FROM users
         WHERE email = ?`,
        ["test.student@achievementhub.local"]
      );

      userId = users[0].user_id;
    }

    // Create student profile
    await db.execute(
      `INSERT INTO students
       (user_id, name, register_number, department_id, year, section)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       department_id = VALUES(department_id),
       year = VALUES(year),
       section = VALUES(section)`,
      [
        userId,
        "Test Student",
        "TEST001",
        departmentId,
        3,
        "A",
      ]
    );

    console.log("Test student created successfully.");
    console.log("Email: test.student@achievementhub.local");
    console.log("Password: Test@12345");

  } catch (error) {
    console.error("Error creating test user:");
    console.error(error.message);
  } finally {
    await db.end();
  }
}

seedTestUser();