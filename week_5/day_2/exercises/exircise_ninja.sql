-- 1. Fetch the last 2 customers in alphabetical order (A-Z) – exclude ‘id’
SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 2 OFFSET (
    SELECT COUNT(*) - 2 FROM customers
);


-- 2. Delete all purchases made by Scott
DELETE FROM purchases
WHERE customer_id = (
    SELECT id
    FROM customers
    WHERE first_name = 'Scott'
);


-- 3. Check if Scott still exists in the customers table
SELECT *
FROM customers
WHERE first_name = 'Scott';

-- Scott still exists because only his purchases were deleted, not the customer


-- 4. Show all purchases including Scott (empty name)
SELECT c.first_name, c.last_name, p.*
FROM purchases p
LEFT JOIN customers c
ON p.customer_id = c.id;

-- LEFT JOIN: shows all purchases, if customer is deleted (like Scott), names appear as NULL


-- 5. Show all purchases excluding Scott
SELECT c.first_name, c.last_name, p.*
FROM purchases p
INNER JOIN customers c
ON p.customer_id = c.id;

-- INNER JOIN: shows only purchases with existing customers, Scott will not appear