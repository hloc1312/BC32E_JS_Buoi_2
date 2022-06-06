/**
 * Bài 1: Tính tiền lương nhân viên
 *
 * Đầu vào:
 *  - luongMotNgay
 *  - soNgayLam
 * Xử lí:
 *  - Luong = luongMotNgay * soNgayLam
 * Đầu ra:
 *  - Luong = ?
 */

document.getElementById("btnTinhLuong").onclick = function (e) {
  e.preventDefault();
  var luongMotNgay = Number(document.getElementById("numberLuong").value);
  var soNgayLam = Number(document.getElementById("numberSoNgay").value);
  var Luong = luongMotNgay * soNgayLam;
  var ketQua = document.getElementById("txtSalary");
  ketQua.innerHTML = Luong;
};

/**
 * Bài 2: Tính giá trị trung bình
 *  Đầu vào:
 *      - soThu1
 *      - soThu2
 *      - soThu3
 *      - soThu4
 *      - soThu5
 *  Xử lý:
 *      - trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5
 *  Đầu ra:
 *      - trungBinh = ?
 *
 */

document.getElementById("btnTrungBinh").onclick = function (e) {
  e.preventDefault();
  var soThu1 = Number(document.getElementById("number1").value);
  var soThu2 = Number(document.getElementById("number2").value);
  var soThu3 = Number(document.getElementById("number3").value);
  var soThu4 = Number(document.getElementById("number4").value);
  var soThu5 = Number(document.getElementById("number5").value);
  var trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  var result = document.getElementById("txtSum");
  result.innerHTML = trungBinh;
};

/**
 * Bài 3: Quy đổi tiền
 *  Đầu vào:
 *      - soTienUSD
 *      - soTienVN = 23500
 *  Xử lí:
 *      - soTienNhanDuoc = soTienVN * soTienUSD
 *  Đầu ra:
 *     - soTienNhanDuoc = ?
 */

document.getElementById("btnChangeMoney").onclick = function (e) {
  e.preventDefault();
  var soTienUSD = Number(document.getElementById("soTienUSD").value);
  var soTienVN = 23500;
  var soTienNhanDuoc = soTienUSD * soTienVN;
  var result = document.getElementById("txtSoTienNhanDuoc");
  result.innerHTML = new Intl.NumberFormat("vn-VN").format(soTienNhanDuoc);
};

/**
 * Bài 4: Tính diện tích, chu vi hình chữ nhật
 *  Đầu vào:
 *      - chieuDai
 *      - chieuRong
 *  Xử lí:
 *      - chuVi = (chieuDai + chieuRong) * 2
 *      - dienTich = chieuDai * chieuRong
 *  Đầu ra:
 *     - chuVi = ?
 *     - dienTich = ?
 */

document.getElementById("btnHCN").onclick = function (e) {
  e.preventDefault();
  var chieuDai = Number(document.getElementById("chieuDai").value);
  var chieuRong = Number(document.getElementById("chieuRong").value);

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  var result = document.getElementById("txtHCN");
  result.innerHTML = "Diện tích: " + dienTich + "; " + "Chu vi: " + chuVi;
};

/**
 * Bài 4: Tính tổng 2 ký số
 *  Đầu vào:
 *      - n
 *  Xử lí:
 *      - hangChuc  = Math.floor(n / 10)
 *      - hangDonVi = n % 10
 *
 *  Đầu ra:
 *    - tongKiSo = ?
 */

document.getElementById("btnKySo").onclick = function (e) {
  e.preventDefault();
  var n = Number(document.getElementById("txtNumber").value);
  var hangChuc = Math.floor(Number(n / 10));
  var hangDonVi = n % 10;
  var tongKiSo = hangChuc + hangDonVi;

  var result = document.getElementById("txtTong");
  result.innerHTML = tongKiSo;
};
