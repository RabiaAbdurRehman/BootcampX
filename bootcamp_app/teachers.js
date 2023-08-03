const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

/***************************Name of Teachers That Assisted*********************************************************************/

pool
  .query(
    `
    SELECT DISTINCT teachers.name AS teacher,
       cohorts.name AS cohort
       FROM teachers
       JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
       JOIN students ON students.id = student_id
       JOIN cohorts ON cohorts.id = cohort_id
       WHERE cohorts.name LIKE $1
       ORDER BY cohorts.name;

    `, [`%${process.argv[2]}%`]
  )
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(`$1: ${row.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));
