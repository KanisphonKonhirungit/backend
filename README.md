### 1. **Clone โปรเจกต์:** อธิบายขั้นตอนการคัดลอกโปรเจกต์จาก Git repository
```bash
git clone <https://github.com/KanisphonKonhirungit/backend.git>
git clone <https://github.com/KanisphonKonhirungit/frontend.git>
```


### 2. **Backend และ Frontend:** 
# Backend
เปลี่ยนไปที่โฟลเดอร์ backend ด้วยคำสั่ง ใน command:
```
cd backend
```

ติดตั้ง dependencies ที่โปรเจกต์นี้ใช้ (เช่น ไฟล์ package.json):
```
npm install
```

รันแอปพลิเคชันในโหมดพัฒนา (development mode):
```
npm run start:dev
```

# Frontend
เปิดโฟลเดอร์ frontend ใน command:
```
cd frontend
```

ติดตั้ง dependencies เช่นกัน:
```
npm install
```

รันแอปพลิเคชันในโหมดพัฒนา:
```
npm run dev
```

### 3. **การตั้งค่าฐานข้อมูล:** 
 เปิด XAMPP สำหรับฐานข้อมูล:
เปิด XAMPP: ให้เปิดโปรแกรม XAMPP บนเครื่องของคุณ

start Apache: เพื่อให้เซิร์ฟเวอร์เว็บทำงาน

start MySQL: เพื่อให้ฐานข้อมูล MySQL ทำงาน

เปิด MySQL Workbench: เพื่อเชื่อมต่อกับฐานข้อมูล
สร้างการเชื่อมต่อใหม่ใน MySQL Workbench:

Connection Name: community_db
Username: root (ถ้าไม่ได้ตั้งรหัสผ่าน)
Password: ไม่ต้องใส่ (เพราะที่บอกว่าเครื่องไม่มีรหัสผ่าน)

### 4. **Unit Test: for backend** 
```
npm run test
```

### 5. **Libraries ที่ใช้:** 

TailwindCSS: สำหรับการออกแบบ UI แบบ responsive และสวยงาม
Axios: ใช้ในการส่ง HTTP request (เช่น การดึงข้อมูลจาก API)
Jest: ใช้สำหรับการทดสอบ Unit Test และการทดสอบโค้ดใน backend
Class-validator: ใช้ในการตรวจสอบข้อมูลที่รับจากผู้ใช้ว่าเป็นไปตามเงื่อนไขที่กำหนดหรือไม่
