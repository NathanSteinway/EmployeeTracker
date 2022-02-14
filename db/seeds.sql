USE employees_db;

INSERT INTO department (name)
VALUES 
('Grunt'),
('Executive Office'),
('Crowd Control'),
('Crafting'),
('Accounting')


INSERT INTO role (title, salary, department_id)
VALUES
('Guild Lead', 100000, 2),
('Treasurer', 120000, 5),
('Assistant Guild Lead', 80000, 3),
('Class/Role Officer', 70000, 3),
('Crafter', 90000, 4),
('Raider', 50000, 1)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Ilya', 'Bellerose', 1, 457),
('Vhin', 'Deezle', 6, 214),
('Merikk', 'Onsgard', 2, 234),
('Alsanna', 'Lhea', 4, 758),
('Dobbert', 'Flobbert', 3, 542),
('Danky', 'Heat', 5, 666);