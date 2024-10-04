// Your code here
function lyricsGenerator(array) {
    let string = '';
    let count = 0;
    array.forEach(element => {
        if(element === 0) {
            string += 'Boom ';
            count = 0;
        } else if(element === 1) {
            string += 'Drop the bass ';
            count += 1;
            if(count === 3) {
                string += '!!!Break the bass!!! ';
            }
        }
    });
    return string;
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
