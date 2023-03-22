const{createReport} = require('docx-templates')
const fs = require('fs')

const createReportFunction = async ( data, cmdDelimiter) => {

  const template = fs.readFileSync('template.docx');
  
  const buffer = await createReport({
    template,
    data,
    cmdDelimiter: ["{", "}"],
  });
  
  fs.writeFileSync('report.docx', buffer)
}

createReportFunction({name: 'John', surname: 'Doe'})