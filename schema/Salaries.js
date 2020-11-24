cube(`Salaries`, {
  sql: `SELECT * FROM employees.salaries`,
  
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
