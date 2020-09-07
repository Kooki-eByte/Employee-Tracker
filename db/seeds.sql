-- Department population 
INSERT INTO management_systemDB.department
    (name)
VALUES
    ('Sales');
INSERT INTO management_systemDB.department
    (name)
VALUES
    ('Engineering');
INSERT INTO management_systemDB.department
    (name)
VALUES
    ('Finance');
INSERT INTO management_systemDB.department
    (name)
VALUES
    ('Legal');


-- Roles population
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Salesperson", 80000, 1);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Lead Engineer", 150000, 2);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Software Engineer", 120000, 2);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Accountant", 125000, 3);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Lawyer", 190000, 4);
INSERT INTO 
management_systemDB.role

    (title, salary, department_id)
VALUES
    ("Full Stack Developer", 110000, 2);

INSERT INTO management_systemDB.role
    (title, salary)
VALUES
    ('Team Lead', 95000);

-- Employees population
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id)
VALUES
    ('Dan', 'Kaltenbaugh', '3');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Cristian', 'Hornedo', '7', '1');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Danny', 'Steiger', '7', '1');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Joseph', 'Joestar', '1', '5');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Pamela', 'Ortiz-Bravo', '2', '1');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alice', 'Lucia', '4', '1');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', '5', '1');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id)
VALUES
    ('Ariella', 'Lina', '6');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Bob', 'Builder', '1', '5');
INSERT INTO management_systemDB.employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Tom', 'Nook', '8', '5');
