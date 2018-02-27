$(document).ready(function () {


    var employees = [
        {
            name: "ali",
            age: 27,
            salary: 8700,
            role: "designer",
            location: "al barsha"
        },
        {
            name: "nabeel",
            age: 34,
            salary: 12000,
            role: "developer",
            location: "discovery gardens"
        },
        {
            name: "shoaib",
            age: 28,
            salary: 6000,
            role: "animator",
            location: "discovery gardens"
        },
        {
            name: "amna",
            age: 24,
            salary: 6000,
            role: "client servicing",
            location: "business bay"
        },
        {
            name: "mujeeb",
            age: 36,
            salary: 5000,
            role: "Accounts",
            location: "Abu Baker Al Siddique"
        },
        {
            name: "samad",
            age: 31,
            salary: 5000,
            role: "Designer",
            location: "Al Barsha"
        },
        {
            name: "joe",
            age: 42,
            salary: 100000,
            role: "CEO",
            location: "MOE"
        },
        {
            name: "inzi",
            age: 25,
            salary: 4500,
            role: "SEO",
            location: "Deira"
        }
    ];
    var b = [];

    $("#save").on('click', function () {
        for (i = 0; i < employees.length; i++) {
            abc = {
                name: $("input[name='name']").val()
                /*      age: $("input[name='age']").val(),
                      salary: $("input[name='salary']").val(),
                      role: $("input[name='role']").val()*/
            };
            if (
                employees[i].name == abc.name
            ) {
                // $("#datashown").add("ul").append(abc.name + " " + abc.age + " " + abc.salary + " " + abc.role);
                b[i] = employees[i];
                if (b[i] = employees[i]) {
                    $("#datashown").append('Name:'+b[i].name).append("<br>").append("Age: "+b[i].age).append("<br>").append("Salary: "+b[i].salary).append("<br>").append("Location: "+b[i].location).append("<br>").append("Role: "+b[i].role);
                }
                else {

                }
            } else if (employees[i].name != abc.name) {
                b[i] = [];
                if (b[i] = []) {
                    $("#datashown").append("<p>Sorry no data match!</p>");
                } else {

                }
            }
            console.log(b[i]);

        }
    });
});
