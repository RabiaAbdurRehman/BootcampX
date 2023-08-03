const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

/***************************Name of Teachers That Assisted*********************************************************************/

pool.query(
    `
    SELECT DISTINCT teachers.name AS teacher,
       cohorts.name AS cohort
       FROM teachers
       JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
       JOIN students ON students.id = student_id
       JOIN cohorts ON cohorts.id = cohort_id
       WHERE cohorts.name LIKE '%${process.argv[2]}%'
       ORDER BY cohorts.name;

    `
)
.then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  })
  .catch(err => console.error('query error', err.stack));