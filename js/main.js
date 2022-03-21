//GrabX
const GrabX_1 = 8000;
const GrabX_2 = 7500;
const GrabX_3 = 7000;
const GrabX_WAIT = 2000;

//GrabSUV
const GrabSUV_1 = 9000;
const GrabSUV_2 = 8500;
const GrabSUV_3 = 8000;
const GrabSUV_WAIT = 3000;

//GrabBLACK
const GrabBLACK_1 = 10000;
const GrabBLACK_2 = 9500;
const GrabBLACK_3 = 9000;
const GrabBLACK_WAIT = 3500;

var tienKM_Dau = 0;
var tienKM_1_19 = 0;
var tienKM_Tren_19 = 0;
var tongTien = 0;
var tienCho = 0;

document.getElementById("btnTinhTien").onclick = function () {
  var grabKM = document.getElementById("grabKM").value;
  var grabTime = document.getElementById("grabTime").value;

  var loaiXe = layLoaiXe();
  switch (loaiXe) {
    case "grabX":
      // Tính tiền grabX
      tinhTienChiTiet(grabKM, grabTime, GrabX_WAIT, GrabX_1, GrabX_2, GrabX_3);
      break;
    case "grabSUV":
      // Tính tiền grabSUV
      tinhTienChiTiet(
        grabKM,
        grabTime,
        GrabSUV_WAIT,
        GrabSUV_1,
        GrabSUV_2,
        GrabSUV_3
      );
      break;
    case "grabBlack":
      // Tính tiền grabBlack
      tinhTienChiTiet(
        grabKM,
        grabTime,
        GrabBLACK_WAIT,
        GrabBLACK_1,
        GrabBLACK_2,
        GrabBLACK_3
      );
      break;
    default:
      alert("Vui lòng chọn loại xe");
      break;
  }
  //In kết quả
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tongTien;
};

function layLoaiXe() {
  var grabX = document.getElementById("grabX");
  var grabSUV = document.getElementById("grabSUV");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";
  if (grabX.checked) {
    loaiXe = "grabX";
  } else if (grabSUV.checked) {
    loaiXe = "grabSUV";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}
function tinhTienCho(grabTime, grabWait) {
  var result = 0;
  if (grabTime >= 3) {
    result = Math.floor(grabTime / 3) * grabWait;
  }
  return result;
}
function tinhKM_Dau(grabKM, giaKM) {
  var result = grabKM * giaKM;
  return result;
}
function tinhKM_1_19(grabKM, giaKM) {
  var result = (grabKM - 1) * giaKM;
  return result;
}
function tinhKM_Tren_19(grabKM, giaKM) {
  var result = (grabKM - 19) * giaKM;
  return result;
}
function tinhTienChiTiet(
  grabKM,
  grabTime,
  grabWait,
  giaKM_Dau,
  giaKM_1_19,
  giaKM_Tren_19
) {
  tienCho = tinhTienCho(grabTime, grabWait);
  if (0 <= grabKM && grabKM <= 1) {
    tienKM_Dau = tinhKM_Dau(grabKM, giaKM_Dau);
    tongTien = tienKM_Dau + tienCho;
    console.log("tongTien: " + tongTien);
  } else if (1 < grabKM && grabKM <= 19) {
    tienKM_Dau = tinhKM_Dau(1, giaKM_Dau);
    tienKM_1_19 = tinhKM_1_19(grabKM, giaKM_1_19);
    tongTien = tienKM_Dau + tienKM_1_19 + tienCho;
    console.log("tongTien: " + tongTien);
  } else if (grabKM > 19) {
    tienKM_Dau = tinhKM_Dau(1, giaKM_Dau);
    tienKM_1_19 = tinhKM_1_19(19, giaKM_1_19);
    tienKM_Tren_19 = tinhKM_Tren_19(grabKM, giaKM_Tren_19);
    tongTien = tienKM_Dau + tienKM_1_19 + tienKM_Tren_19 + tienCho;
    console.log("tongTien: " + tongTien);
  }
  return tongTien;
}
document.getElementById("btnHoaDon").onclick = function () {
  var loaiXe = layLoaiXe();
  var grabKM = document.getElementById("grabKM").value;
  var grabTime = document.getElementById("grabTime").value;
  switch (loaiXe) {
    case "grabX":
      tongTien = tinhTienChiTiet(
        grabKM,
        grabTime,
        GrabX_WAIT,
        GrabX_1,
        GrabX_2,
        GrabX_3
      );
      hienThi(
        grabKM,
        GrabX_1,
        GrabX_2,
        GrabX_3,
        GrabX_WAIT,
        tienKM_Dau,
        tienKM_1_19,
        tienKM_Tren_19,
        grabTime,
        tienCho,
        tongTien
      );
      break;
    case "grabSUV":
      tongTien = tinhTienChiTiet(
        grabKM,
        grabTime,
        GrabSUV_WAIT,
        GrabSUV_1,
        GrabSUV_2,
        GrabSUV_3
      );
      hienThi(
        grabKM,
        GrabSUV_1,
        GrabSUV_2,
        GrabSUV_3,
        GrabSUV_WAIT,
        tienKM_Dau,
        tienKM_1_19,
        tienKM_Tren_19,
        grabTime,
        tienCho,
        tongTien
      );
      break;
    case "grabBlack":
      tongTien = tinhTienChiTiet(
        grabKM,
        grabTime,
        GrabBLACK_WAIT,
        GrabBLACK_1,
        GrabBLACK_2,
        GrabBLACK_3
      );
      hienThi(
        grabKM,
        GrabBLACK_1,
        GrabBLACK_2,
        GrabBLACK_3,
        GrabBLACK_WAIT,
        tienKM_Dau,
        tienKM_1_19,
        tienKM_Tren_19,
        grabTime,
        tienCho,
        tongTien
      );
      break;
    default:
      alert("Yêu cầu nhập lại xe")
      break;
  }
};
function hienThi(
  grabKM,
  giaKM_Dau,
  giaKM_1_19,
  giaKM_Tren_19,
  grabWait,
  tienKM_Dau,
  tienKM_1_19,
  tienKM_Tren_19,
  grabTime,
  tienCho,
  tongTien
) {
  var content = "";
  var tongTien = tinhTienChiTiet(grabKM,
    grabTime,
    grabWait,
    giaKM_Dau,
    giaKM_1_19,
    giaKM_Tren_19)
  if (0 <= grabKM && grabKM <= 1) {
    content += "<tr>";
    content += "<td>KM đầu tiên</td>";
    content += "<td>" + grabKM + "</td>";
    content += "<td>" + giaKM_Dau + "</td>";
    content += "<td>" + tienKM_Dau + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Thời gian chờ</td>";
    content += "<td>" + Math.floor(grabTime / 3) + "</td>";
    content += "<td>" + grabWait + "</td>";
    content += "<td>" + tienCho + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Tổng tiền</td>";
    content += "<td>" + tongTien + "</td>";
    content += "</tr>";
  } else if (1 < grabKM && grabKM <= 19) {
    content += "<tr>";
    content += "<td>Từ</td>";
    content += "<td>" + grabKM + "</td>";
    content += "<td>" + giaKM_1_19 + "</td>";
    content += "<td>" + tienKM_1_19 + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Thời gian chờ</td>";
    content += "<td>" + Math.floor(grabTime / 3) + "</td>";
    content += "<td>" + grabWait + "</td>";
    content += "<td>" + tienCho + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Tổng tiền</td>";
    content += "<td>" + tongTien + "</td>";
    content += "</tr>";
  } else if (grabKM > 19) {
    content += "<tr>";
    content += "<td>Từ</td>";
    content += "<td>" + grabKM + "</td>";
    content += "<td>" + giaKM_Tren_19 + "</td>";
    content += "<td>" + tienKM_Tren_19 + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Thời gian chờ</td>";
    content += "<td>" + Math.floor(grabTime / 3) + "</td>";
    content += "<td>" + grabWait + "</td>";
    content += "<td>" + tienCho + "</td>";
    content += "</tr>";
    content += "<tr>";
    content += "<td>Tổng tiền</td>";
    content += "<td>" + tongTien + "</td>";
    content += "</tr>";
  }
  document.getElementById("tbody").innerHTML = content;
}
