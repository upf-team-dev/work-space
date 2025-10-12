$(function() {
  const $hamburger = $('.hamburger');
  const $navi = $('#navi');
  const $mask = $('#mask');

  // ハンバーガーをクリック
  $hamburger.on('click', function() {
    $(this).toggleClass('active');
    $navi.toggleClass('active');
    $mask.toggleClass('active');

    // メニュー開いた時はボタン無効
    if ($navi.hasClass('active')) {
      $('.nav-buttons').css('pointer-events', 'none');
    } else {
      $('.nav-buttons').css('pointer-events', '');
    }
  });

  // マスククリックで閉じる
  $mask.on('click', function() {
    $hamburger.removeClass('active');
    $navi.removeClass('active');
    $mask.removeClass('active');
    $('.nav-buttons').css('pointer-events', '');
  });
  
  // ナビ内リンククリックで閉じる
  $('#navi a').on('click', function() {
    $hamburger.removeClass('active');
    $navi.removeClass('active');
    $mask.removeClass('active');
    $('.nav-buttons').css('pointer-events', '');
  });

 //スライダー処理
  const $slider = $('.slider-container');
  const $slides = $slider.find('img');
  const slideCount = $slides.length;
  let currentIndex = 0;

  // 1枚目をクローンして最後に追加
  const $firstClone = $slides.first().clone();
  $slider.append($firstClone);

  const totalSlides = slideCount + 1; // クローンを含めた枚数

  function showNextSlide() {
    currentIndex++;
    $slider.css({
      'transform': `translateX(${-currentIndex * 100}%)`,
      'transition': 'transform 0.6s ease'
    });

    // 最後のクローンに到達したら
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        $slider.css({
          'transform': 'translateX(0)',
          'transition': 'none' // アニメーションなしでジャンプ
        });
        currentIndex = 0;
      }, 600); // transitionの時間と合わせる
    }
}
// 自動再生
  setInterval(showNextSlide, 3000);
});

// ローディング画面
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading_screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 1000);
  }, 2600)
});