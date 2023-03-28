// 1. student adlı obyekt yaradıb name, age, course, faculty adlı sahələr verib hər birini console çıxardın.
 const student={
    name:"Medina",
    age:20,
    couse:4,
    faculty:"Mexmat"
 }
 console.log(student)

//  2. Bir obyekt yaradıb başqa dəyişənə yeni obyekt kimi kopyala.
const copyStudent={...student};
copyStudent.age=30;
console.log(copyStudent)

// 3. 1-dən 10 kimi olan ədədlərin hərfi yazılışın obyektdən istifadə edərək console çıxardın.
const number={
    1:"bir",
    2:"iki",
    3:"uc",
    4:"dord",
    5:"bes",
    6:"alti",
    7:"yeddi",
    8:"sekkiz",
    9:"doqquz",
    10:"on"
}
for (const key in number) {
   console.log(number[key])
}
// console.log(number)

// 4. person adlı, sahələri name, surname olan obyektdə getFullName adlı bir funskiya yaradıb name + surname qaytarsın.

const person={
    name:"Medina",
    surname:"Aghazade",
     getFullName:function(){
      return  `${this.name} ${this.surname}`
    }
}
// console.log(person.getFullName())

// 5. Hər hansısa bir obyekt yaradıb onun key və value bir sətrdə console çıxardın. Məsələn: Nəticədə “key: name, value: Cavid”.

for (const key in student) {
  console.log(`key:${key} , value:${student[key]}`)
}

// 6. Obyektin hər hansısa bir sahəsinin olub olmadığını yoxluyan bir funksiya yazın.
const test={  
}
var getEmpty = function(test) {
    for(var key in test){
       return false;
    }
    return true;
 };
console.log(getEmpty(test))

// 7. Ədədlərdən ibarət obyekt yaradın və bütün value-ların cəmini console çıxardın.
const sumOfNumber={
    a:10,
    b:20,
    c:40,
    d:22,
}
let sum=0;
for (const key in sumOfNumber) {
 sum+=sumOfNumber[key];
}
// console.log(sum)

// 8. Ədədlərdən ibarət olan bir massiv yaradın və onun uzunluğun iki dəfə azaldın.
const num=[10,11,20,20,30,50,20,0]
const copyNum=[...num]
copyNum.length=parseInt(num.length/2)
console.log(copyNum)

// 9. Massivdə yerləşən bütün ədədlərin cəmini tapın.
let sumNum=0;
for (let i = 0; i < num.length; i++) {
    sumNum+=num[i]
}
console.log(sumNum)

// 10. Massivdə yerləşən ən böyük və ən kiçik ədədi tapın.
let bigNumber=num[0];
let smallNumber=num[0];
for (let i = 0; i < num.length; i++) {
if (num[i]>bigNumber) {
    bigNumber=num[i]   
}
else if(num[i]<smallNumber){
    smallNumber=num[i]
}   
}
console.log(smallNumber)
console.log(bigNumber)

// 11. Massivdə yerləşən bütün tək və cüt ədədlərı ayrı massivlərə yazın. Məsələn [1,2,3,4,5] -> [1,3,5] və [2,4].

const odd=[];
const even=[];
for (let i = 0; i < num.length; i++) {
    if(num[i]%2==0){
        even.push(num[i])
    }
    else{
        odd.push(num[i])
    } 
}
console.log(`odd numbers:${odd}`)
console.log(`even numbers:${even}`)

// 12. Massivdə yerləşən ədələri böyükdən kiçiyə və kiçikdən böyüyə çeşidliyin.

for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j]<num[i]) {
        const temp=num[j]
        num[j]=num[i]
        num[i]=temp;
      }
        
    } 
}
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[j]>num[i]) {
        const temp=num[j]
        num[j]=num[i]
        num[i]=temp;
      }   
    } 
}
// console.log(num)

// 13. Massivdən false deyimli (undefined, null, false və s.i.) elementləri silib yeni massiv qaytaran funksiya yazın.
let testArry=['test',10, false,null,undefined]
let newTestArry=[]
function removeFalseElement(testArry){
testArry.forEach(element => {
    if(element){
        newTestArry.push(element)
    }
});
return newTestArry;
}
// console.log(removeFalseElement(testArry))

// 14. Massivdə yerləşən elementləri reverse edən funksiya yazın.
let array=[22,44,5,"madina",4]
let reverse=[]
for(var i = array.length-1; i>=0; i--){
    reverse.push(array[i]);
 }
 console.log(reverse)