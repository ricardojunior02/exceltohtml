class Processor {
  static Process(data){
    
    const row = data.split('\r\n');

    const rows = [];

     row.forEach(element => {
      const arr = element.split(',');
      rows.push(arr)
    });

    return rows;
  }
}

module.exports = Processor;