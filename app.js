// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕：0-9 +-*/
var btns = document.getElementsByClassName("btn");
// 最終數字
var final = "";

// var 在 function 內使用
// let 在 { } 內使用
for (let i =0; i <btns.length; i++){
    // 按鈕[編號].添加事件監聽器("點擊"，匿名函式() { 函式(); })
    btns[i].addEventListener("click", function(){
        // 顯示(按鈕[編號].內容)
        show(btns[i].innerHTML);
    });
}
// 函式 顯示(參數-內容)
function show(content) {
    final += content;
    // 結果元素.內容 = 參數-內容
    result.innerHTML = final;
}