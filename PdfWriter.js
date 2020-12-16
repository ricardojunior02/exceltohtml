const pdf = require('html-pdf');

class PdfWriter {
  static WritePdf(filename, html){
    pdf.create(html,{}).toFile(filename, (err) => {
      if(err){
        throw new Error(err.message)
      }
    });
  }
}


module.exports = PdfWriter;