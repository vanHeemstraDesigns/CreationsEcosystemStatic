-- Name: SQLtoJSON.sample.sql
-- Description: An sql statement that creates a JSON string
SELECT CONCAT("{company: [", 
	(SELECT GROUP_CONCAT("{"
		,"Name: '",`name`,"'"
		,", DeptNo: ",`deptno`
		,", Location: '",`location`,"'"
		,", Employees: [",(
			SELECT GROUP_CONCAT("{"
			,"Name: '",`name`,"'"
			,", Salary: ",`salary`
			,", Hire Date: '", DATE_FORMAT(`hiredate`, '%d-%m-%Y'),"'"
			,"}")
			FROM sample_employee 
			WHERE sample_employee.`deptno`=sample_department.`deptno`
		)
		,"]}")
		FROM sample_department
	)
,"]}") AS JSON
FROM DUAL;