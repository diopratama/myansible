var promise = playbook.exec();
promise.then(function(successResult) {
  console.log(successResult.code); // Exit code of the executed command
  console.log(successResult.output) // Standard output/error of the executed command
}, function(error) {
  console.error(error);
})
