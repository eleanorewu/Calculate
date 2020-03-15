// 取得結果元素
var result = document.getElementById("result");
// 取得按鈕：0-9 +-*/
var btns = document.getElementsByClassName("btn");

// 按鈕[編號].添加事件監聽器("點擊"，匿名函式() { 函式(); })
btns[0].addEventListener("click", function(){
    // 顯示(按鈕[編號].內容)
    show(btns[0].innerHTML);
});

// 函式 顯示(參數-內容)
function show(content){
    // 結果元素.內容 = 參數-內容
    result.innerHTML = content;
}

