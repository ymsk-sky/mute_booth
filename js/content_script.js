let words;

async function loadData() {
  const result = await new Promise((resolve, reject) => {
    chrome.storage.local.get(["chromememo"], function(result) {
      resolve(result);
    });
  });
  if (result.chromememo) {
    words = result.chromememo.text;
  }
}

loadData().then(() => {
  // ミュートワード一覧を取得
  const mute_words = words.split("\n");

  // 要素一覧を取得
  const elements = document.getElementsByClassName("item-card l-card");

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    
    // タイトル・ショップ名・商品ブランド(おそらくショップID)
    const title = element.querySelector(".item-card__title");
    const shop = element.querySelector(".item-card__shop-name");
    const brand = element.getAttribute("data-product-brand");
    const line = `${title.innerText} ${shop.innerText} ${brand.innerText}`;

    // 条件に合う要素を非表示状態にする
    if (mute_words.some(item => line.includes(item))) {
      // タイトルを変更
      if (title) {
        title.innerText = "-";
      }
      // ショップ名を変更
      if (shop) {
        shop.innerText = "-"
      }

      // サムネイル画像を代替画像に置き換え
      const imgElement = element.querySelector(".item-card__thumbnail.js-thumbnail");
      if (imgElement) {
        // 代替画像準備
        const imgURL = chrome.runtime.getURL("img/substitute.jpg");
        // 既にある子要素から直接htmlを置き換え
        imgElement.innerHTML = `<img src="${imgURL}">`;
      }
      
      // ショップ画像を代替画像に置き換え
      const shopImgElement = element.querySelector(".user-avatar.at-item-footer");
      const shopImgURL = chrome.runtime.getURL("img/shop_16x16.png");
      shopImgElement.src = shopImgURL;
    }
  }
});
