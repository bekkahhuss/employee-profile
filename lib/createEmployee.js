const employeeArr = [];

const createEmployee = data => {
    if (!data) {
        return '';
    }
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        if (data[i].title == 'Manager') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails"><i class="fa-solid fa-people-roof"></i> ${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b><a href = "mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item"><b>Office Number: </b>${data[i].officeNum}</li>
                    </ul>
                </div>
            `
        } else if (data[i].title == 'Engineer') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails"><i class="fa-solid fa-computer"></i> ${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b><a href = "mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item"><b>Github: </b><a href="https://github.com/${data[i].github}">${data[i].github}</a></li>
                    </ul>
                </div>
            `
        } else if (data[i].title == 'Intern') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails"><i class="fa-solid fa-graduation-cap"></i> ${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b><a href = "mailto: ${data[i].email}">${data[i].email}</a></li>
                        <li class="list-group-item"><b>School: </b>${data[i].school}</li>
                    </ul>
                </div>
            `
        }
        
    }

    // console.log("test ", employeeArr);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/style.css" />
        <title>Employee Profile</title>
    </head>
    <body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main id="employee-cards">
        ${employeeArr}
    </main>
    <footer></footer>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>  
    `;
}

module.exports = {createEmployee};