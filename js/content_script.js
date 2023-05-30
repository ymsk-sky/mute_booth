// 要素一覧を取得
const elements = document.getElementsByClassName("item-card l-card");
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];

  // 条件に合う要素を非表示状態にする
  if (element.getAttribute("data-product-brand") == "hanahanehomari") {
    // タイトルを変更
    const titleElement = element.querySelector(".item-card__title");
    if (titleElement) {
      titleElement.innerText = "-";
    }

    // ショップ名を変更
    const shopNameElement = element.querySelector(".item-card__shop-name");
    if (shopNameElement) {
      shopNameElement.innerText = "-"
    }

    // サムネイル画像を代替画像に置き換え
    const imgElement = element.querySelector(".item-card__thumbnail.js-thumbnail");
    if (imgElement) {
      // 代替画像準備
      const imgURL = chrome.runtime.getURL("img/substitute.jpg");
      console.log(imgURL);
      // 既にある子要素から直接htmlを置き換え
      imgElement.innerHTML = `<img src="${imgURL}">`;
      // 代替画像を配置
    }
  }
}
