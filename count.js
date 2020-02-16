//this will load data from csv file
//let parseColumnName = d3.timeParse('%Y%m');
//to convert data from csv file to required format
function convertRow(row, index)
{
  let out = {};
  out.type = 0;
  out.tier = 0;
  out.iclevel = 0;
  out.region = 0;
  // out.date = new Date();
  for(let col in row) {
    switch (col) {
      case 'county':
        out[col] = row[col];
        break;
      case 'tier':
        out.tier = +(row[col]);
        break;
      case 'type':
        out.type = +(row[col]);
        break;
      case 'iclevel':
        out.iclevel = +(row[col]);
        break;
      case 'region':
        out.region = +(row[col]);
        break;
      }
  }
  return out;
}
