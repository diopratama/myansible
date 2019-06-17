var Ansible = require('node-ansible');
var command = new Ansible.Playbook().playbook('myplaybook')
command.exec();
var promise = command.exec();
promise.then(function(result) {
  console.log(result.output);
  console.log(result.code);
})
