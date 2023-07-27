SELECT assignments.day as day, COUNT(assignments.*) as total_assignments
FROM assignments
GROUP BY day
HAVING COUNT(assignments.*) >= 10
ORDER BY day;





-- Select the day and the total assignments.
-- Order the results by day.
-- This query only requires the assignments table.