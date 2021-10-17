export function getFruit(name) { // สร้าง function getFruit เพื่อรับค่า parameter สำหรับนำข้อมูลไปเช็คกับเงื่อนไขที่เรากำหนด โดยคืนค่าออกมาเป็น array
    let fruits = ["orange", "apple", "cherry", "banana"]; // สร้าง array fruits
    fruits.unshift(name); // method สำหรับเพิ่มชื่อตรงหน้าตำแหน่งแรกของ array fruits
    function addFruit(newName) {
        let i = 0; //  กำหนดค่า index ที่จะนำไปใช้ต่อไป 
        console.log("Welcome New Fruit!"); // สำหรับแสดงข้อความตามที่กำหนด
        if (newName.length >= fruits[i].length) { // กำหนดเงื่อนไขว่าถ้า newName.length มีค่ามากกว่าfruits ที่ index = 0 (ตามที่กำหนดในตัวแปร i )
            fruits.unshift(newName); // เพิ่มชื่อตรงหน้าตำแหน่งแรกของอาร์เรย์เดิม
        }
        return fruits; // คืนค่าอาร์เรย์หลังเพิ่มชื่อใหม่
    }
    return addFruit; // คืนค่าเป็นฟังก์ชัน addFruit
}