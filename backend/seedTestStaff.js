const bcrypt = require("bcryptjs");
const db = require("./config/db");

async function seedTestStaff() {
  try {
    const password = "Staff@12345";
    const passwordHash = await bcrypt.hash(password, 10);

    // Create/find CSE department
    await db.execute(
      `INSERT INTO departments
       (department_name, department_code)
       VALUES (?, ?)
       ON DUPLICATE KEY UPDATE
       department_name = VALUES(department_name)`,
      [
        "Computer Science and Engineering",
        "CSE",
      ]
    );

    const [departments] = await db.execute(
      `SELECT department_id
       FROM departments
       WHERE department_code = ?`,
      ["CSE"]
    );

    const departmentId = departments[0].department_id;

    // Create/update staff user
    const [userResult] = await db.execute(
      `INSERT INTO users
       (email, password_hash, role)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE
       password_hash = VALUES(password_hash),
       role = VALUES(role)`,
      [
        "test.staff@achievementhub.local",
        passwordHash,
        "STAFF",
      ]
    );

    let userId = userResult.insertId;

    // If user already existed, get its ID
    if (!userId) {
      const [users] = await db.execute(
        `SELECT user_id
         FROM users
         WHERE email = ?`,
        ["test.staff@achievementhub.local"]
      );

      userId = users[0].user_id;
    }

    // Create/update staff profile
    await db.execute(
      `INSERT INTO staff
       (
         user_id,
         name,
         department_id,
         designation
       )
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
       name = VALUES(name),
       department_id = VALUES(department_id),
       designation = VALUES(designation)`,
      [
        userId,
        "Test Staff",
        departmentId,
        "Faculty Coordinator",
      ]
    );

    console.log("Test staff created successfully.");
    console.log("Email: test.staff@achievementhub.local");
    console.log("Password: Staff@12345");
  } catch (error) {
    console.error("Error creating test staff:");
    console.error(error.message);
  } finally {
    await db.end();
  }
}

seedTestStaff();