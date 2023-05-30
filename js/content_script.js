// 要素一覧を取得
const elements = document.getElementsByClassName("item-card l-card");
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];

  // 条件に合う要素を非表示にする
  if (element.getAttribute("data-product-brand") == "hanahanehomari") {
    // タイトルを取得
    const grandChildElement = element.querySelector(".item-card__title");
    if (grandChildElement) {
      const title = grandChildElement.innerText;
      console.log("title:", title);
    }
    
    element.parentNode.removeChild(element);
  }
}
