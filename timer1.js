
n minus() {
  if (document.getElementById("num")) {
  //document.getElementById():取得頁面中特定id的元素值
    var curr = parseInt(document.getElementById("num").innerHTML);
    //.innerHTML:取得網頁內的ID元素後，將想要寫入的字串寫入ID元素。
    //parseInt():把字串轉換成整數
  }

  if (curr && curr <= 60) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = 60;
  }

  setTimeout(function() {
    minus();
  }, 1000);
  //setTimeout(執行的function,等待時間)
};
minus();
