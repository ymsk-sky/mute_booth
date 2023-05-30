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
  }
}
