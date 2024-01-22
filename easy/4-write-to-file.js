// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs')


fs.writeFile('./file.txt','https://github.com/100xdevs-cohort-2/assignments.git',{flag:'a'},(err)=>{
    if(err){
      console.log('errrrrro')
    }else{
      console.log('files has been updated')

    }
  } )

  fs.readFile('file.txt','utf-8',(err,data)=>{

    if(!err){
        console.log(data)
    }
  })