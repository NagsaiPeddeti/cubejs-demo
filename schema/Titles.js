cube(`Titles`, {
  sql: `SELECT * FROM employees.titles`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, fromDate, toDate]
    }
  },
  
  dimensions: {
    title: {
      sql: `title`,
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
