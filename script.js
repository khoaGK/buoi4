console.log("--- BÀI 1: KIỂM TRA SỐ DƯƠNG/ÂM ---");
const so1 = parseInt(prompt("Bài 1: Nhập một số nguyên:"));
if (isNaN(so1)) {
    console.log("Bài 1: Đầu vào không hợp lệ.");
} else if (so1 > 0) {
    console.log(`Bài 1: Số ${so1} là **Số dương**.`);
} else if (so1 < 0) {
    console.log(`Bài 1: Số ${so1} là **Số âm**.`);
} else {
    console.log(`Bài 1: Số ${so1} là **Số zero**.`);
}
console.log("-".repeat(50));

console.log("--- BÀI 2: PHÂN LOẠI TUỔI ---");
const tuoi = parseInt(prompt("Bài 2: Nhập tuổi của bạn:"));
if (isNaN(tuoi) || tuoi < 0) {
    console.log("Bài 2: Tuổi không hợp lệ.");
} else if (tuoi < 18) {
    console.log(`Bài 2: Tuổi ${tuoi} thuộc nhóm **Trẻ em**.`);
} else if (tuoi <= 30) {
    console.log(`Bài 2: Tuổi ${tuoi} thuộc nhóm **Thanh niên**.`);
} else if (tuoi <= 50) {
    console.log(`Bài 2: Tuổi ${tuoi} thuộc nhóm **Trung niên**.`);
} else {
    console.log(`Bài 2: Tuổi ${tuoi} thuộc nhóm **Cao niên**.`);
}
console.log("-".repeat(50));

console.log("--- BÀI 3: KIỂM TRA NĂM NHUẬN ---");
const nam = parseInt(prompt("Bài 3: Nhập một năm để kiểm tra Năm Nhuận:"));
const isLeapYear = (nam % 4 === 0 && nam % 100 !== 0) || (nam % 400 === 0);

if (isNaN(nam) || nam <= 0) {
    console.log("Bài 3: Năm không hợp lệ.");
} else if (isLeapYear) {
    console.log(`Bài 3: Năm ${nam} là **Năm Nhuận** ✅`);
} else {
    console.log(`Bài 3: Năm ${nam} **Không nhuận** ❌`);
}
console.log("-".repeat(50));

console.log("--- BÀI 4: MÁY TÍNH ĐƠN GIẢN ---");
const numA = parseFloat(prompt("Bài 4: Nhập số thứ nhất (A):"));
const numB = parseFloat(prompt("Bài 4: Nhập số thứ hai (B):"));
const operator = prompt("Bài 4: Nhập toán tử (+, -, *, /):");

let result4;
let error4 = false;

if (isNaN(numA) || isNaN(numB)) {
    console.log("Bài 4: Đầu vào số không hợp lệ.");
} else {
    switch (operator) {
        case '+':
            result4 = numA + numB;
            break;
        case '-':
            result4 = numA - numB;
            break;
        case '*':
            result4 = numA * numB;
            break;
        case '/':
            if (numB === 0) {
                console.log("Bài 4: Lỗi! Không thể chia cho 0.");
                error4 = true;
            } else {
                result4 = numA / numB;
            }
            break;
        default:
            console.log("Bài 4: Toán tử không hợp lệ.");
            error4 = true;
    }

    if (!error4) {
        console.log(`Bài 4: Kết quả ${numA} ${operator} ${numB} là: **${result4.toFixed(2)}**`);
    }
}
console.log("-".repeat(50));

console.log("--- BÀI 5: XẾP HẠNG ĐIỂM ---");
const diem = parseInt(prompt("Bài 5: Nhập điểm (0-100):"));
let xepHang5 = "";

if (isNaN(diem) || diem < 0 || diem > 100) {
    console.log("Bài 5: Điểm không hợp lệ.");
} else {
    switch (true) {
        case (diem >= 90):
            xepHang5 = "Giỏi";
            break;
        case (diem >= 70):
            xepHang5 = "Khá";
            break;
        case (diem >= 50): 
            xepHang5 = "Trung bình";
            break;
        default: 
            xepHang5 = "Yếu";
    }
    console.log(`Bài 5: Với điểm ${diem}, xếp hạng là: **${xepHang5}**.`);
}
console.log("-".repeat(50));

console.log("--- BÀI 6: KIỂM TRA CHẴN/LẺ BẰNG TERNARY ---");
const so6 = parseInt(prompt("Bài 6: Nhập một số nguyên:"));
if (isNaN(so6)) {
    console.log("Bài 6: Đầu vào không hợp lệ.");
} else {
    const ketQua6 = so6 % 2 === 0 ? "Chẵn" : "Lẻ";
    console.log(`Bài 6: Số ${so6} là **${ketQua6}**.`);
}
console.log("-".repeat(50));

console.log("--- BÀI 7: QUYẾT ĐỊNH THỜI TIẾT ---");
const nhietDo = parseFloat(prompt("Bài 7: Nhập nhiệt độ (độ C):"));
const coMua = prompt("Bài 7: Có mưa không? (Nhập 'true' hoặc 'false'):").toLowerCase() === 'true';
let hoatDong7;

if (isNaN(nhietDo)) {
    console.log("Bài 7: Nhiệt độ không hợp lệ.");
} else {
    if (nhietDo > 25) {
        if (coMua) {
            hoatDong7 = "Nóng và mưa. Nên **Ở nhà** xem phim.";
        } else {
            hoatDong7 = "Nóng và khô ráo. Thích hợp để **Đi chơi** ngoài trời.";
        }
    } else { 
        if (coMua) {
            hoatDong7 = "Lạnh và mưa. Nên **Uống trà nóng**.";
        } else {
            hoatDong7 = "Mát mẻ và khô ráo. Thích hợp để **Đi dạo**.";
        }
    }
    console.log(`Bài 7: Nhiệt độ ${nhietDo}°C, Mưa: ${coMua}. Quyết định: **${hoatDong7}**`);
}
console.log("-".repeat(50));

console.log("--- BÀI 8: MENU LỰA CHỌN (FALL THROUGH) ---");
const ngay = parseInt(prompt("Bài 8: Nhập số (1-7) đại diện cho ngày trong tuần:"));
let tenNgay8 = "";

switch (ngay) {
    case 1:
        tenNgay8 = "Thứ Hai";
        break;
    case 2:
        tenNgay8 = "Thứ Ba";
        break;
    case 3:
        tenNgay8 = "Thứ Tư";
        break;
    case 4:
        tenNgay8 = "Thứ Năm";
        break;
    case 5:
        tenNgay8 = "Thứ Sáu";
        break;
    case 6:
    case 7: 
        tenNgay8 = "Cuối tuần - Nghỉ ngơi 🎉";
        break;
    default:
        tenNgay8 = "Không phải ngày hợp lệ.";
}
console.log(`Bài 8: Số ${ngay} tương ứng với: **${tenNgay8}**`);
console.log("-".repeat(50));

console.log("--- BÀI 9: KIỂM TRA QUYỀN TRUY CẬP ---");
const role = prompt("Bài 9: Nhập vai trò (admin/user/guest):").toLowerCase();
const age9 = parseInt(prompt("Bài 9: Nhập tuổi:"));
let duocTruyCap = false;

if (isNaN(age9) || age9 < 0) {
    console.log("Bài 9: Tuổi không hợp lệ.");
} else {
    if (role === 'admin') {
        duocTruyCap = true; 
    } else if (role === 'user' && age9 >= 18) {
        duocTruyCap = true;
    } else {
        duocTruyCap = false; 
    }

    if (duocTruyCap) {
        console.log(`Bài 9: Vai trò: ${role}, Tuổi: ${age9}. **Được truy cập** ✅`);
    } else {
        console.log(`Bài 9: Vai trò: ${role}, Tuổi: ${age9}. **Không được truy cập** ❌`);
    }
}
console.log("-".repeat(50));


console.log("--- BÀI 10: CHUYỂN ĐỔI ĐƠN VỊ ---");
const tempInput = parseFloat(prompt("Bài 10: Nhập nhiệt độ:"));
const unit = prompt("Bài 10: Nhập đơn vị muốn chuyển đổi (C hoặc F):").toUpperCase();
let result10;
let error10 = false;
let targetUnit;

if (isNaN(tempInput)) {
    console.log("Bài 10: Giá trị nhiệt độ không hợp lệ.");
} else {
    switch (unit) {
        case 'C':
            result10 = (tempInput * 9 / 5) + 32;
            targetUnit = "Fahrenheit";
            break;
        case 'F':
            result10 = (tempInput - 32) * 5 / 9;
            targetUnit = "Celsius";
            break;
        default:
            console.log("Bài 10: Đơn vị không hợp lệ. Vui lòng nhập 'C' hoặc 'F'.");
            error10 = true;
    }

    if (!error10) {
        console.log(`Bài 10: Chuyển đổi ${tempInput}°${unit} sang ${targetUnit} là: **${result10.toFixed(2)}°${targetUnit.charAt(0)}**`);
    }
}
console.log("-".repeat(50));