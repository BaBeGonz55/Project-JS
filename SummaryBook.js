// เก็บจำนวนหนังสือที่อ่าน
let bookCount = 0;

function saveBook() {
  const bookName = document.getElementById('bookName').value;
  const summary = document.getElementById('summary').value;

  // ตรวจสอบว่ามีการกรอกข้อมูล
  if (bookName === '' || summary === '') {
    alert('กรุณากรอกชื่อหนังสือและสรุป');
    return;
  }

  // บันทึกข้อมูลลงใน console.log
  console.log('หนังสือ:', bookName);
  console.log('สรุป:', summary);

  // สร้างแถวใหม่ในตาราง
  const table = document.getElementById('bookTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  
  // สร้างเซลล์สำหรับชื่อหนังสือและสรุป
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  
  // ใส่ข้อมูลลงในเซลล์
  cell1.textContent = bookName;
    cell2.textContent = summary;

  // เพิ่มจำนวนหนังสือที่อ่าน
  bookCount++;
  document.getElementById('bookCount').textContent = bookCount;

  // เคลียร์ช่องกรอกข้อมูล
  document.getElementById('bookName').value = '';
  document.getElementById('summary').value = '';
}
