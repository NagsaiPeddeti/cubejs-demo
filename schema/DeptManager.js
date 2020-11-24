cube(`DeptManager`, {
  sql: `SELECT * FROM employees.dept_manager`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fromDate, toDate]
    }
  },
  
  dimensions: {
    deptNo: {
      sql: `dept_no`,
      type: `string`
    },
    
    fromDate: {
      sql: `from_date`,
      type: `time`
    },
    
    toDate: {
      sql: `to_date`,
      type: `time`
    }
  }
});
