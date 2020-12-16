const fs = require('fs');
const util = require('util');

class Writer {
  constructor(){
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filename, data){
    try {
      return await this.writer(filename, data)
    } catch (error) {
      throw new Error(error.message);
    }
    
  }
}

module.exports = Writer;