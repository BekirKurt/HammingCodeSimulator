function hesapla() {
  // Gerekli olan check biti sayisi
  /*
        M + K + 1 <= 2^K
        
        M = veri sayisi
        K = check biti sayisi
  */

  document.getElementById("right").style.display = "block";

  var checkBitsNumber = document.getElementById("veri").value;
  var M = checkBitsNumber.length;
  for (var K = 0; K < 10; K++) {
    if (Math.pow(2, K) >= M + K + 1) {
      break;
    }
  }

  document.getElementById("paragraf").innerHTML =
    "Gerekli olan check biti sayisi: " + K + "<br><br>";

  var ekle = "<table border='1'><tr>";
  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle +=
        "<td align='center', width='50px'>" +
        `<b> <font color=red>  ${i}</font></b>` +
        "</td>";
    } else {
      ekle += "<td align='center', width='50px'>" + `${i}` + "</td>";
    }
  }
  ekle += "</><tr>";
  var j = 0;
  var q = 0;
  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle += "<td align=center>" + " check " + "</td>";
    } else {
      ekle +=
        "<td align='center', width='50px'>" +
        checkBitsNumber.charAt(j) +
        "</td>";
      j++;
    }
  }
  ekle += "</tr><tr>";

  document.getElementById("tablo").innerHTML =
    "Daha sonra değeri 1 olan bitlerin konumuna 2'lik tabanda XOR uygulanarak check bitinin değeri bulunur.";

  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle += "<td align=center>" + "check" + "</td>";
    } else {
      if (checkBitsNumber.charAt(q) == 1) {
        ekle +=
          "<td align='center', width='50px'> <b>" +
          checkBitsNumber.charAt(q) +
          "</b></td>";
      } else {
        ekle +=
          "<td align='center', width='50px'>" +
          checkBitsNumber.charAt(q) +
          "</td>";
      }
      q++;
    }
  }
  ekle += "</tr><tr>";
  var z = 0;
  var toplam = 0;
  var goster = "";

  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle += "<td align=center>" + "check" + "</td>";
    } else {
      if (checkBitsNumber.charAt(z) == 1) {
        ekle +=
          "<td align='center', width='50px'> <b>" +
          convertToBinary(i) +
          "</b></td>";
        toplam += convertToBinary(i);
        goster += convertToBinary(i) + "<br>";
      } else {
        ekle +=
          "<td align='center', width='50px'>" + convertToBinary(i) + "</td>";
      }
      z++;
    }
  }

  ekle += "</tr></table>";
  document.getElementById("paragraf").innerHTML = ekle;

  var sonuc = XOR(toplam);
  document.getElementById("ibra2").innerHTML = goster;
  document.getElementById("ibra3").innerHTML = sonuc;
  document.getElementById("ibra4").style.borderBottom = "2px solid gray";
  document.getElementById("ibra4").innerHTML =
    "checkbiti :&nbsp;&nbsp;&nbsp;" + sonuc + "&nbsp;&nbsp;bitine eşittir.";

  var ekle2 = "<table border=1 ><tr>";

  var t = 0;

  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle2 +=
        "<td align='center', width='50px'>" +
        `<b> <font color=red>  ${i}</font></b>` +
        "</td>";
    } else {
      ekle2 += "<td align='center', width='50px'>" + `${i}` + "</td>";
    }
  }
  ekle2 += "</tr><tr>";

  document.getElementById("ibra45").innerHTML =
    "Check bitleri bulunduktan sonra kendilerine ayrılan bölgeye yerleştirilir ve Hamming kodu bulunur.";
  document.getElementById("ibra45").innerHTML += "<br><h1>Hamming Kodu</h1>";

  t = 0;
  j = 0;
  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle2 +=
        "<td align='center', width='50px'>" +
        "<font color=red>" +
        sonuc.charAt(t) +
        "</font>" +
        "</td>";
      t++;
    } else {
      ekle2 +=
        "<td align='center', width='50px'>" +
        checkBitsNumber.charAt(j) +
        "</td>";
      j++;
    }
  }

  document.getElementById("ibra5").innerHTML = ekle2;
  document.getElementById("pac").innerHTML = "<h1>Error Correction</h1>";
  document.getElementById("pac").innerHTML += "<br>" + ekle2;
}

function pacific() {
  var checkBitsNumber = document.getElementById("veri").value;
  var M = checkBitsNumber.length;
  for (var K = 0; K < 10; K++) {
    if (Math.pow(2, K) >= M + K + 1) {
      break;
    }
  }

  var ekle3 = document.getElementById("ibra5").innerHTML;
  var sonuc = document.getElementById("ibra3").innerHTML;
  var tryer = document.getElementById("error").value;

  var ekle4 = "<table border=1 ><tr>";
  var veriKelimesi = "";

  t = 0;
  j = 0;
  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      veriKelimesi += sonuc.charAt(t);
      t++;
    } else {
      veriKelimesi += checkBitsNumber.charAt(j);
      j++;
    }
  }

  for (i = M + K; i > 0; i--) {
    if (
      i == Math.pow(2, 5) ||
      i == Math.pow(2, 4) ||
      i == Math.pow(2, 3) ||
      i == Math.pow(2, 2) ||
      i == Math.pow(2, 1) ||
      i == Math.pow(2, 0)
    ) {
      ekle4 +=
        "<td align='center', width='50px'>" +
        "<font color='red'>" +
        i +
        "</font>" +
        "</td>";
    } else {
      ekle4 += "<td align='center', width='50px'>" + i + "</td>";
    }
  }
  ekle4 += "</tr><tr>";

  for (i = 1; i < M + K + 1; i++) {
    ekle4 +=
      "<td align='center', width='50px'>" +
      veriKelimesi.charAt(i - 1) +
      "</td>";
  }
  ekle4 += "</tr><tr>";

  for (i = 1; i < M + K + 1; i++) {
    if (i == M + K + 1 - parseInt(tryer)) {
      if (parseInt(veriKelimesi.charAt(i - 1)) == 0) {
        veriKelimesi = setCharAt(veriKelimesi, i - 1, "1");
        ekle4 +=
          "<td align='center', width='50px'>" +
          veriKelimesi.charAt(i - 1) +
          "</td>";
      } else if (parseInt(veriKelimesi.charAt(i - 1)) == 1) {
        veriKelimesi = setCharAt(veriKelimesi, i - 1, "0");
        ekle4 +=
          "<td align='center', width='50px'>" +
          veriKelimesi.charAt(i - 1) +
          "</td>";
      }
    } else {
      ekle4 +=
        "<td align='center', width='50px'>" +
        veriKelimesi.charAt(i - 1) +
        "</td>";
    }
  }
  ekle4 += "</tr><tr>";

  var toplam2 = 0;
  var goster2 = "";

  goster2 +=
    "<font color='red'>" +
    document.getElementById("ibra3").innerHTML +
    "</font>" +
    "<br>";

  for (i = 1; i < M + K + 1; i++) {
    if (
      i == veriKelimesi.length - (Math.pow(2, 0) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 1) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 2) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 3) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 4) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 5) - 1)
    ) {
      ekle4 +=
        "<td align='center', width='50px'>" +
        veriKelimesi.charAt(i - 1) +
        "</td>";
    } else {
      if (parseInt(veriKelimesi.charAt(i - 1)) == 1) {
        ekle4 +=
          "<td align='center', width='50px'>" +
          "<b>" +
          veriKelimesi.charAt(i - 1) +
          "</b>" +
          "</td>";
        0;
        toplam2 += convertToBinary(veriKelimesi.length - i + 1);
        goster2 += convertToBinary(veriKelimesi.length - i + 1) + "<br>";
      } else {
        ekle4 +=
          "<td align='center', width='50px'>" +
          veriKelimesi.charAt(i - 1) +
          "</td>";
      }
    }
  }
  ekle4 += "</tr><tr>";

  var cen = veriKelimesi.length;
  for (i = 1; i < veriKelimesi.length + 1; i++) {
    if (
      i == veriKelimesi.length - (Math.pow(2, 0) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 1) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 2) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 3) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 4) - 1) ||
      i == veriKelimesi.length - (Math.pow(2, 5) - 1)
    ) {
      ekle4 +=
        "<td align='center', width='50px'>" + convertToBinary(cen) + "</td>";
      cen--;
    } else {
      if (parseInt(veriKelimesi.charAt(i - 1)) == 1) {
        ekle4 +=
          "<td align='center', width='50px'><b>" +
          convertToBinary(cen) +
          "</b></td>";
        cen--;
      } else {
        ekle4 +=
          "<td align='center', width='50px'>" + convertToBinary(cen) + "</td>";
        cen--;
      }
    }
  }

  document.getElementById("pacific").innerHTML =
    tryer + " konumdaki bitin değeri değiştiriliyor..." + "<br>";
  document.getElementById("pacific35").innerHTML =
    "Son adım olarak değeri 1 olan konumlara ve check bitine ikilik tabanda XOR uygulanır ve sonuç bize hatalı bitin konumunu verir. Kırmızılı bit check bitidir.";

  document.getElementById("pacific3").innerHTML = ekle4;

  if (
    tryer == Math.pow(2, 0) ||
    tryer == Math.pow(2, 1) ||
    tryer == Math.pow(2, 2) ||
    tryer == Math.pow(2, 3) ||
    tryer == Math.pow(2, 4) ||
    tryer == Math.pow(2, 5)
  ) {
    toplam2 += convertToBinary(tryer);
    goster2 += "<font color='green'>" + convertToBinary(tryer) + "<br>";
    a;
  }

  toplam2 += parseInt(document.getElementById("ibra3").innerHTML);
  var sonuc2 = XOR(toplam2);

  document.getElementById("pacific4").innerHTML = goster2;
  document.getElementById("pacific5").innerHTML = sonuc2;
  document.getElementById("pacific6").innerHTML =
    "Elde edilen bit hatalı bitin konumunu gösterir.";
  document.getElementById("pacific7").innerHTML =
    "<br>" + sonuc2 + " konumunda hata vardır...";
}

function convertToBinary(x) {
  let bin = 0;
  let rem,
    i = 1;
  while (x != 0) {
    rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }

  return bin;
}

function XOR(sum) {
  var checkbiti = "";

  while (sum >= 1) {
    if (sum % 2 == 0) {
      checkbiti += "0";
    } else {
      checkbiti += "1";
    }

    sum = parseInt(sum / 10, 10);
  }

  // check bitine 0 ekle
  var checkBitsNumber = document.getElementById("veri").value;
  var M = checkBitsNumber.length;
  for (var K = 0; K < 10; K++) {
    if (Math.pow(2, K) >= M + K + 1) {
      break;
    }
  }

  while (checkbiti.length < K) {
    checkbiti += "0";
  }

  return reverseBit(checkbiti);
}

function reverseBit(checkbiti) {
  var yenibit = "";

  for (i = checkbiti.length; i >= 0; i--) {
    yenibit += checkbiti.charAt(i);
  }
  return yenibit;
}

function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}
