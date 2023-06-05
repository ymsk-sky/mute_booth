let memo;

loadData();

function loadData() {
  chrome.storage.local.get(["chromememo"], function(obj) {
      memo = obj.chromememo;

      // データが無い場合の初期化
      if(!memo) {
          memo = [ {text: "", lastUpdate: new Date()} ];
          chrome.storage.local.set({chromememo:memo}, function(){});
          return;
      }
      $("#word_list").val(memo.text);
  });
}

// 保存ボタンのアクション
$("#save").on("click", function() {
  memo = {
      text: $("#word_list").val(),
      lastUpdate: new Date()
  };
  chrome.storage.local.set({chromememo: memo}, function() {
      alert("saved");
  });
});
