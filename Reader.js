const fs = require('fs');
const util = require('util');

class Reader {

  constructor(){
    this.reader = util.promisify(fs.readFile);
  }

  async Read(filePath){

    try {
      const data = await this.reader(filePath, 'utf-8');

      return data;
    } catch (error) {
      return error.message;
    }
    
  }
}

module.exports = Reader;