var m = require('mithril');

//カウンター
var counter = 0;

//タイマーでカウントアップ
setInterval(function () {
    counter++;
    m.redraw(true);
}, 1000);

//ビュー
function view() {
    return 'count: ' + counter;
}

//HTML要素にコンポーネントをマウント
m.mount(document.body, {view: view});

