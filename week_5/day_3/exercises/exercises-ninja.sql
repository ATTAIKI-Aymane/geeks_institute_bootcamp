-- ========================================
-- 1️ Films enfants disponibles (G / PG)
-- ========================================

SELECT *
FROM film f
WHERE rating IN ('G', 'PG')
AND film_id NOT IN (
    SELECT i.film_id
    FROM inventory i
    JOIN rental r ON i.inventory_id = r.inventory_id
    WHERE r.return_date IS NULL
);

-- ========================================
-- 2️ Create Waiting List Table
-- ========================================

CREATE TABLE waiting_list (
    id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    film_id INT NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (film_id) REFERENCES film(film_id)
);

-- ========================================
-- 3️ Test (Insert Data)
-- ========================================

INSERT INTO waiting_list (child_name, film_id) VALUES
('Ali', 1),
('Sara', 1),
('Youssef', 2),
('Lina', 1);

-- ========================================
-- 4 Number of people waiting per film
-- ========================================

SELECT film_id, COUNT(*) AS waiting_count
FROM waiting_list
GROUP BY film_id;

-- ========================================
--  BONUS (Film title instead of ID)
-- ========================================

SELECT f.title, COUNT(w.id) AS waiting_count
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.title;