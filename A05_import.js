import { getFruit } from "./A05_export.js"; //ดึง function ที่ export มาจาก Part 1 เพื่อใช้งาน

//กรณีที่ 1 ชื่อผลไม้ตั้งต้นมี 4 ตัวอักษร
let fruitGroup = getFruit('plum'); //สร้างตัวเก็บ function getFruit และเช็คค่าตามเงื่อนไข
console.log(fruitGroup('berry')); //เรียกใช้ fruitGroup และใส่ค่าเพื่อเช็คตามเงื่อนไข
console.log("---------------------------------"); //เขียนเส้นกั้น
console.log(fruitGroup('coconut')); //เรียกใช้ fruitGroup และใส่ค่าเพื่อเช็คตามเงื่อนไข

//กรณีที่ 2 ชื่อผลไม้ตั้งต้นมี 7 ตัวอักษร
let fruitG = getFruit('coconut');
console.log(fruitG('berry'));
console.log("---------------------------------");
console.log(fruitG('papaya'));

//กรณีที่ 3 ชื่อผลไม้ตั้งต้นมี 10 ตัวอักษร
let fruitH = getFruit('watermelon');
console.log(fruitH('grape'));
console.log("---------------------------------");
console.log(fruitH('mangosteen'));