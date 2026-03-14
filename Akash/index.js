
//Insert a char

let s = "Geeks",
    let c = 'A',
        let pos = 3
let subStrings = s.split(3)
let res = subStrings[0] + c + subStrings[1]

let new = ""
for (let i = 0; i < s.length; i++) {
    if (i == pos) {
        new += c
    } else {
        new += s[i]
    }
}


// Remove a char
Input : s = "abcde",  pos = 1
Output : s = "acde"
let s = "abcde";
let pos = 1;
let res = "";
for( let i =0; i < s.length; i++ ) {
	if( i == pos ) continue
	res += s[i]
}
console.log(res)


let s = "abcdcdd"
let c = "d"
let res = ""
function remove( i ) { 
 if( s[i] !== c ) res += s[i]
 if( s[i] === undefined ) return res;
 return remove( i+1 )
}

remove(0)

let s = "abcdcdd"
s[0] =>>> a , s[6] ===> d

[a, d] = [d, a];

//Camel case of a given sentence

let res









