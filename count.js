//this will load data from csv file
//let parseColumnName = d3.timeParse('%Y%m');
//to convert data from csv file to required format
function convertRow(row, index)
{
  //count -> Average number of kids per cohort
  //female -> Fraction female among kids
  //k_married ->  Fraction of kids married in 2014
  // par_mean -> Mean parental income  
  let out = {};
  out.count = 0;
  out.female = 0;
  out.k_married = 0;
  out.par_mean = 0;
  // out.date = new Date();
  for(let col in row) {
    switch (col) {
      case 'region':
        out[col] = row[col];
        break;
      case 'k_married':
        out.k_married = +(row[col]);
        break;
      case 'count':
        out.count = +(row[col]);
        break;
      case 'female':
        out.female = +(row[col]);
        break;
      case 'par_mean':
        out.par_mean = +(row[col]);
        break;
      }
  }
  return out;
}
