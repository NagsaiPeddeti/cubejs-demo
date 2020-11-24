cube(`Departments`, {
  sql: `SELECT * FROM employees.departments`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [deptName]
    }
  },
  
  dimensions: {
    deptNo: {
      sql: `dept_no`,
      type: `string`
    },
    
    deptName: {
      sql: `dept_name`,
      type: `string`
    }
  }
});
