const endpoint = "http://localhost:3000";

function handleClick(e) {
e.preventDefault();
const mainEl = document.getElementById('main');
return getData()
.then((data) => {
const propertyData = data.propertyData;
mainEl.innerHTML = `
<div className="property-info-wrapper">
<p><b>タイトル: </b>${propertyData.propertyName}</p>
<p><b>タイプ: </b>${propertyData.propertyType}</p>
<p><b>キャンセルポリシー: </b>${propertyData.cancelPolicy}</p>
<p><b>部屋数: </b>${propertyData.roomNum}</p>
<p><b>バスルーム数: </b>${propertyData.bathroomNum}</p>
<p><b>一泊あたり: </b>${propertyData.priceInDollars}ドル</p>
<p><b>ホスト: </b>${propertyData.host.firstName}</p>
</div>
`
})
.catch((e) => {
mainEl.innerHTML = `
<div className="property-info-wrapper">
<p>${e.message}</p>
</div>
`
})
}

function getData() {
/*
fetchDataを呼び出し、responseのステータスを元にデータ取得成功か失敗かを判断しましょう。
成功ならpropertyDataをPromise.resolveで返します。
失敗ならエラーメッセージをPromise.rejectで返します。
*/
return fetchData().then((res) => {
const json = res.json();
if (res.status !== 200) {
return json.then((data) => {
return Promise.reject(new Error(data.message));
});
} else {
return json;
}
}


function fetchData(userId = 1) {
const url = `${endpoint}/properties/${userId}`;
return fetch(url, {
method: 'get',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
});
}

{
const button1 = document.getElementById('button1');
button1.addEventListener("click", handleClick);
}
