SELECT COUNT(id)
FROM students
-- LIMIT 3;
WHERE cohort_id IN (1, 2, 3);