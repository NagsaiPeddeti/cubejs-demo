cube(`Employees`, {
  sql: `SELECT * FROM employees.employees`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [firstName, lastName, birthDate, hireDate]
    }
  },
  
  dimensions: {
    firstName: {
      sql: `first_name`,
      type: `string`
    },
    
    lastName: {
      sql: `last_name`,
      type: `string`
    },
    
    birthDate: {
      sql: `birth_date`,
      type: `time`
    },
    
    hireDate: {
      sql: `hire_date`,
      type: `time`
    }
  }
});
