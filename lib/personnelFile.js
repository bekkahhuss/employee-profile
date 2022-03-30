const inquirer = require('inquirer');


const information = [
    {info: "Enter employee name:"},
    {info: "Select employee title:"},
    {info: "Enter employee ID:"},
    {info: "Enter employee email:"},
    {info: "Select employee office number:"}
];


personnelFile = function () {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: information[0].info,
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: information[1].info,
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        }
    ])
}

personnelFile();