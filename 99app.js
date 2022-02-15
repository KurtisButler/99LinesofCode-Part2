document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("singButton")
    button.addEventListener("click", function () {

        let friends = ['Joseph', 'Jon', 'Kaitlin', 'Jesse', 'Hailey'];

        for (let index = 0; index < friends.length; index++) {

            let friendsDiv = document.createElement('div')
            friendsDiv.className = ('friends')
            let friendsHeader = document.createElement('h3');
            friendsHeader.innerText = friends[index] + (' ');



            console.log(friends[index].toUpperCase() + ":")

            for (let count = 99; count > 0; count--) {
                let paragraph = document.createElement('p')


                if (count > 2) {
                    paragraph.innerText = count + " lines of code in the file, " + count + " lines of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file.";
                }
                else if (count == 2) {
                    paragraph.innerText = count + " lines of code in the file, " + count + " lines of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file.";
                }
                else if (count == 1) {
                    paragraph.innerText = count + " line of code in the file, " + count + " line of code; " + friends[index] + " strikes one out, clears it all out, " + (count - 1) + " line of code in the file!";


                };
                friendsDiv.appendChild(paragraph);
            };
            document.body.appendChild(friendsDiv);

        };

    })







})