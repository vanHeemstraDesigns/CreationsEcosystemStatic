-- Name: SQLtoJSONSchema.sample.sql
-- Description: An sql statement that creates a schema as an JSON string
SELECT CONCAT('{"domains": {' 
	,(SELECT GROUP_CONCAT(""
		,`SchemaKey`,": ",(
			SELECT GROUP_CONCAT(""
			,`SchemaKey`,": ",`SchemaValue`
			,"")
			FROM tbl_schema t1
			WHERE t1.`fk_ParentID`=t2.`pk_SchemaID`
			AND t1.`pk_SchemaID`!=t1.`fk_ParentID`
		)
		,"")
		FROM tbl_schema t2
	)
,"}}") AS JSON
FROM DUAL;