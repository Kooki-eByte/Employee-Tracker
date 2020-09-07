-- Delete the database if it already exists
DROP DATABASE IF EXISTS management_systemDB;

-- Creates the database 
CREATE DATABASE management_systemDB;

-- Use the database we created
USE management_systemDB;

-- Create a table named department with two columns (id, name)
DROP TABLE IF EXISTS department;
CREATE TABLE department
(
    id INT
    AUTO_INCREMENT NOT NULL,
    name VARCHAR
    (30) NULL,
    PRIMARY KEY
    (id)
);

    -- Create a table named role with 4 columns (id, title, salary, dept_id)
    DROP TABLE IF EXISTS role;
    CREATE TABLE role
    (
        id INT
        AUTO_INCREMENT NOT NULL,
    title VARCHAR
        (30) NULL,
    salary DECIMAL
        (8,2) NULL,
    department_id INT NULL,
    PRIMARY KEY
        (id),
    FOREIGN KEY
        (department_id) REFERENCES department
        (id) 
);

        -- Create a table named employee with 5 columns (id, first_name, last_name, role_id, manager_id)
        DROP TABLE IF EXISTS employee;
        CREATE TABLE employee
        (
            id INT
            AUTO_INCREMENT NOT NULL,
    first_name VARCHAR
            (30) NOT NULL,
    last_name VARCHAR
            (30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY
            (id),
    FOREIGN KEY
            (role_id) REFERENCES role
            (id),
    FOREIGN KEY
            (manager_id) REFERENCES employee
            (id)
);