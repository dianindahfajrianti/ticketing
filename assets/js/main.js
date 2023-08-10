(function() {
  "use strict";

  /**
    * Animation on scroll
  */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

  /**
    * Video Background
  */
  var url = "assets/video/";
  var vid = document.getElementById("player");
  var i = 0;
  var vid = new Array();
  vid[0] = 'video1.mp4';
  vid[1] = 'video2.mp4';
  vid[2] = 'video3.mp4';

  var vidcount = vid.length;
  $('#player').on('ended',function(){
    i++;
    if(i == (vidcount)){
    i = 0;
    videoPlay(i);
    }
    else{
    videoPlay(i);
    }
  });
  function videoPlay(videoNum)
  {
    document.getElementById("player").setAttribute("src",url+vid[videoNum]);
    document.getElementById("player").load();
    document.getElementById("player").play();
  }

  /**
    * Time
  */
  function time(id)
  {
  
    time    = new Date;

    h = time.getHours();
    if(h<10) { h = "0"+h; }
    m = time.getMinutes();
    if(m<10) { m = "0"+m; }
    s = time.getSeconds();
    if(s<10) { s = "0"+s; }

    result = h+':'+m;
    document.getElementById(id).innerHTML = result;
    setTimeout('time("'+id+'");','1000');
    return true;
  }

  /**
    * Date Time
  */
  function date_time(id)
  {

    date    = new Date;
    tahun   = date.getFullYear();
    bulan   = date.getMonth();
    tanggal = date.getDate();
    hari    = date.getDay();

    namabulan = new Array('Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember');
    namahari  = new Array('Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu');

    h = date.getHours();
    if(h<10) { h = "0"+h; }
    m = date.getMinutes();
    if(m<10) { m = "0"+m; }
    s = date.getSeconds();
    if(s<10) { s = "0"+s; }

    result = namahari[hari]+', '+tanggal+' '+namabulan[bulan]+' '+tahun+'  '+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
  }

  /** 
    * Print Service
  */
   const $PrintService = document.querySelector("#PrintService");
   $PrintService.addEventListener("click", () => {
       window.print();
   });
 
   /** 
     * Print Ambil
   */
   const $PrintAmbil = document.querySelector("#PrintAmbil");
   $PrintAmbil.addEventListener("click", () => {
     window.print();
   });
  
  /**
     * Step 1
  */
  $('.video').on('click',function(){
    $('.layanan').addClass('d-grid');
    $('.layanan').removeClass('d-none');

    $('.selesai').addClass('d-none');
    $('.selesai').removeClass('d-flex');

    setTimeout(() => {
      toStart();
    }, 10000);
  });

  /**
     * Step 2
  */
  $('.rdLayanan').on('click',function(){
    layanan = $(this).val();
    $('.layanan').addClass('d-none');
    $('.layanan').removeClass('d-grid');

    $('.selesai').addClass('d-flex');
    $('.selesai').removeClass('d-none');

    if (layanan == 'service') {
      $('#pesan').text('JANGAN LUPA MEMINTA TANDA TERIMA BARANG KEPADA PETUGAS');
    } else {
      $('#pesan').text('JANGAN LUPA MEMERIKSA KEMBALI BARANG ANDA');
    }

    setTimeout(() => {
      toStart();
    }, 10000);
  });

  /**
    * Back To Start
  */
  function toStart() {

    $('.layanan').addClass('d-none');
    $('.layanan').removeClass('d-grid');

    $('.selesai').addClass('d-none');
    $('.selesai').removeClass('d-flex');
    
  }



