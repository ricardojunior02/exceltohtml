const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const Writer = require('./Writer');
const Pdf = require('./PdfWriter');
const HtmlParser = require('./HtmlParser');

const reader = new Reader();
const writer = new Writer();

async function main(){
  const data = await reader.Read('./pokedex.csv');
  
  const dataProcess = Processor.Process(data);

  const pokemons = new Table(dataProcess);

  const html = await HtmlParser.Parse(pokemons);

  writer.Write(Date.now() + 'pokedex.html', html);
  Pdf.WritePdf(Date.now() + '.PDF', html);
}

main();