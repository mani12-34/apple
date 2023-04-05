'use strict';

/*document.querySelector('.number').textContent
document.querySelector('.score').textContent


document.querySelector('.check').addEventListener('click',function(){
    let message1=document.querySelector('.message').textContent
    const input=Number(document.querySelector('.guess').value)
    console.log(input)
    if(!input){
        message1="No number"
        console.log(message1)
    }
    else if(input === 14){
        message1="Correct Number"
        console.log(message1)
    }
     else if(input>=1 && input<=10){
        message1="Too low"
        console.log(message1)
    }
    else if(input>=11 && input<=14){
        message1="close to a number try "
        console.log(message1)
    }

    else if(input>=15 && input<=20){
        message1="Too high"
        console.log(message1)
    }
    else if(input >20){
        message1="Limit exceeded"
        console.log(message1)
    }
    else{
        console.log("Not a number")
    }
})

console.log (document.querySelector('.label-score').textContent)

const palindrome=(string1)=>{
    const len=string1.length
    let i;
    for(i=0;i<len/2;i++){
        if(string1[i]!==string1[len-i-1]){
            return `he ${string1} is not a palindrome`
        }
        else{
            return `The ${string1} is a palindrome`
        }
        
    }
}

const string1=prompt("Enter ypur string")
console.log(palindrome(string1))

const str="madam"
const newstrarray=str.split('')
const reversestring=newstrarray.reverse().join('')
const newstrarray1=str.split('').join('')
console.log()
console.log()
if(newstrarray1===reversestring){
    console.log(`The given string '${str}' is a palindrome`)
}
else{
    console.log(`The given string '${str}' is not a palindrome`)
}

const flights='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru09343384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'
const splitting=flights.split('+')


for(const flight of splitting){
    const [type,from,to,time]=flight.split(';')
    
    const output=`${type.startsWith('_Delayed')?"🛑":" "}${type.replace(/_/g," ")} from ${from.toUpperCase().slice(0,3)} to ${to.toUpperCase().slice(0,3)} (${time.replace(/:/g,"h")})`
    console.log(output.padStart(46,' '))
}


const fibonaaci=n=>{

    if(n<2){
        return 1
    }
    else{
        return fibonaaci(n-2)+fibonaaci(n-1)
        
    }
}
console.log(fibonaaci(6))

let a=0;
let b=1;
const num=[]
for(let i=1;i<10;i++){
    num.push(a)
    
    let result=a+b
    a=b
    b=result
}
console.log(num)

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id:1,
        name:"John",
        isActive:false,
    },
    {
        id:3,
        name:"Mike",
        isActive:false,
    }
]
const active=[]
for(let i=0;i<users.length;i++){
   if(users[i].isActive){
    active.push(users[i].name)
   }
}

console.log(active)


// anargram or not

const string1="daman"
const string2="madan"
const s1=string1.split('').sort().join('')
const s2=string2.split('').sort().join('')
console.log(s1,s2)
if(s1===s2){
    console.log("The given two strings are anargram")
}

const reverse_str=str=>{
      const string_in_array=str.split('')
      const rev=string_in_array.reverse()
      const reversedstring_in_word=rev.join('')
      console.log(reversedstring_in_word)
}
reverse_str("Hello")

// swap two varaiable's values 

const input1=prompt("Enter the value1")
const input2=prompt("Enter the value2")
const temp=input1
input1=input2
input2=temp
console.log()

const numbers=[1,2,3,4,5,3,4,2,3,]
const remove_duplicate_numbers=new Set(numbers).size

console.log(remove_duplicate_numbers)

const numbe=new Set([1,2,3,4,5,2,3,4,5,7,])
numbe.clear()
console.log(numbe)

const name=[...new Set("Manikandan")].sort()
console.log(name)

const res=new Map([
    ['Name','Saravana Bhavan'],
    ['Available','Dishes'],
    [1,'sambar rice'],
    [2,'tomato rice'],
    [3,'curd rice'],
    [true,'Foods are available'],
    [false,'Foods are not available']
])


const food='veg briyani'
console.log(res.get(1) )
console.log(res.get(food===  res.get(1) || food===res.get(2) ||food=== res.get(3)))
console.log([...res])
const namees=[]
const valu=[]
console.log([...res.keys()])
console.log([...res.values()])
console.log(namees)
console.log(valu)

const obj={
    Name:'Saravana Bhavan',
    sambarrice:'1',
    tomatorice:'2',
    curdrice:'3',
    isavailable:'Foods ae available',
    isnot:'Foods are not availble'
}
const rest=new Map(Object.entries(obj))
console.log(rest)

const gameEvents=new Map([
    [17,'Goal'],
    [36,'Substitution'],
    [47,'Goal'],
    [61,'Substitution'],
    [64,'Yellow card'],
    [69,'Red Card'],
    [70,'Substitution'],
    [72,'Goal'],
    [76,'Substitution'],
    [80,'Goal'],
    [92,'Yellow card']
])

// console.log(word.replace(/g/g,'+'))
let word_split=word.split(' ')
console.log(word_split)
let captial=[]
for( const n of word_split){
    captial.push(n[0].toUpperCase() + n.slice(1))
    
}
function captialize_words(word){
    const splitter=word.split(' ')
    const names=[]
    for(const n of splitter){
        names.push(n.replace(n[0],n[0].toUpperCase))
    }
    console.log(names)
}
captialize_words('today i am going to culturalgs and today relation ')

//  print the vowels in array from the given string

const str=prompt("Enter your string")
const str_split=str.split('')
const str_set=new Set(str_split)
const str_arr=[...str_set]
const vowels=[]
for(const n of str_arr){
    if(n==='a'|| n==='e'|| n==='i'|| n==='o'|| n==='u'|| n==='A'|| n==='E'|| n==='I'|| n==='O'|| n==='U'){
           vowels.push(n)
    }
}
console.log(str_split,str_set,str_arr)
console.log(vowels)

// sum of an array by 4

const sum=4
const number=[1,2,3,4,5,6,7,8,9,0,12]
const sum_array=number.map((num)=>{
    if(num>5){
        return num-4
    }
    else{
        return num+4
    }
})
console.log([...sum_array])

function captialize_words(word){
    
    const names=[]
    for(const n of splitter){
        names.push(n.replace(n[0],n[0].toUpperCase))
    }
    console.log(names)
}
captialize_words()
const word='today i am going to culturalgs and today relation '
const splitter=word.split(' ')
console.log(splitter)
// const capitalize=splitter.map(wor =>wor.toUpperCase() )
// console.log([...capitalize])
let names=[]

for(let i=0;i<splitter.length;i++){
      names[i].push(splitter[i][0].toUpperCase())
}
console.log(names)
const number=[1,2,3,4,5,6,7,8,9,0,12]
const sum=number.reduce(function(acc,cur){
    return acc+cur
},0);
console.log(sum)*/

const calc=function(a=1,b=5,c=8){
    return a+b*c
}
console.log(calc(2))