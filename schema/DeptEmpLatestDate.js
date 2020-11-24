cube(`DeptEmpLatestDate`, {
  sql: `SELECT * FROM employees.dept_emp_latest_date`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fromDate, toDate]
    }
  },
  
  dimensions: {
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
