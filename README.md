# 🧠 CQRS Practice Project

โปรเจกต์นี้สร้างขึ้นเพื่อศึกษาการใช้งาน **CQRS (Command Query Responsibility Segregation)** pattern โดยใช้ **NestJS** ร่วมกับ **TypeORM** และ **SQLite** สำหรับจัดเก็บข้อมูล รองรับการทำ **CRUD (Create, Read, Update, Delete)** แบบแยก Command และ Query อย่างชัดเจน

## ⚙️ Tech Stack

- NestJS - Backend Framework  
- TypeORM - ORM สำหรับเชื่อมต่อฐานข้อมูล  
- SQLite - Database แบบ file-based  
- @nestjs/cqrs - CQRS Pattern Integration  

## 📁 โครงสร้างโปรเจกต์

```
src/
├── task/
│   ├── cqrs/
│       |── commands/
        └── handlers/
        └── queries/
    ├── entities/
└── main.ts
```

## 📦 วิธีใช้งาน

### 1. ติดตั้ง dependencies
```bash
npm install
```

### 2. รันโปรเจกต์
```bash
npm run start:dev
```

### 3. ทดสอบผ่าน Postman หรือ REST Client

#### 📝 สร้าง Task
```
POST /task
Body:
{
  "description": "เรียน CQRS pattern"
}
```

####  ดูรายการ Task ทั้งหมด
```
GET /task
```

### แก้ไขสถานะ Completed
```
PATCH /task/:id/completed/:completed
เช่น: PATCH /task/1/completed/true
```

####  ลบ Task
```
DELETE /task/:id
```

## จุดประสงค์ในการฝึก

- เข้าใจการแยก Command และ Query เพื่อความชัดเจน  
- ฝึกใช้ @CommandHandler, @QueryHandler, CommandBus, และ QueryBus  
- ปูพื้นฐานการออกแบบระบบให้ scalable และ maintainable  



##  ผู้พัฒนา
Created by [Thankorn Amatrawet]  
